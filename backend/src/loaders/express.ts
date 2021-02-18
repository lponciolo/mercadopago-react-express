import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import routes from './../routes'
import MiddleWare404 from '../middlewares/404'
import morgan from 'morgan'
import { stream } from './logger'
import errorMiddleware from '../middlewares/error'

import docsRoute from './docs'

export default async ({ app }: { app: express.Application }) => {
  const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: false,
  }
  app.enable('trust proxy')
  app.use(helmet())
  app.use(cors(options))
  app.use(morgan('combined', { stream }))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  // ...add more middlewares here
  app.use('/', routes)
  app.use('/docs', docsRoute)
  app.use('/*', MiddleWare404)

  app.use(errorMiddleware)

  return app
}
