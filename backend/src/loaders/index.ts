import { Application } from 'express'
import expressLoader from './express'
import Logger from './logger'
import dotenv from 'dotenv'
import path from 'path' // algo
import mercadopagoSDKInit from './mercadopagoSDK'

export default async (expressApp: Application) => {
  Logger.info('inicializando')
  console.log('init')
  const result = dotenv.config({
    path: path.join(__dirname, '../../.env'),
  })
  if (result.error) {
    Logger.error('error loading dot-env')
    throw result.error
  } else {
    Logger.info('dot-env loaded')
  }
  try {
    await mercadopagoSDKInit()
    Logger.info('MercadoPago SDK loaded')
  } catch (err) {
    Logger.error('error loading MercadoPago SDK')
  }
  await expressLoader({ app: expressApp })
}
