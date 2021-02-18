import { Router } from 'express'
const router = Router()

import PaymentController from '../controllers/payment.controller'
import PaymentService from '../services/payment.service'
// import controllers

const PaymentInstance = new PaymentController(new PaymentService())

router.post('/new', (req, res, next) =>
  PaymentInstance.getMercadoPagoLink(req, res, next)
)

router.post('/webhook', (req, res) => PaymentInstance.webhook(req, res))

export default router
