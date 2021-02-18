import { Router } from 'express'

const router = Router()

// import controllers

import PaymentRoute from './payment.route'
//

// import more routes here
router.use('/payment', PaymentRoute)

export default router
