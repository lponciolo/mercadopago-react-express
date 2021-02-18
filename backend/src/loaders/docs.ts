import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import * as options from '../../swaggerOptions.json'
const router = Router()

router.use('/', swaggerUi.serve, swaggerUi.setup(options, { explorer: true }))

export default router
