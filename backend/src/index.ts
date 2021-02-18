/**
 * Required External Modules
 */
import loaders from './loaders'
import express from 'express'
import exitLoader from './loaders/exitLoader'
/**
 * App Variables
 */
const app = express()
console.timeLog('app')

loaders(app).then(() => {
  console.log('aqui')
  if (!process.env.PORT) {
    process.exit(1)
  }
  const PORT: number = parseInt(process.env.PORT as string, 10)

  if (process.env.NODE_ENV !== 'test') {
    const server = app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
    exitLoader(server)
  }
})

export { app }
/**
 *  App Configuration
 */

/**
 * Server Activation
 */

/**
 * Webpack HMR Activation
 */
