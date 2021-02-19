/* eslint-disable require-jsdoc */
import { NextFunction, Response } from 'express'

class AppController {
  paymentService: any
  constructor(paymentService: any) {
    this.paymentService = paymentService
  }
  async getMercadoPagoLink(
    req: any,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const checkout = await this.paymentService.createPaymentMercadoPago(
        req.body.cookies
      )
      console.log(checkout)
      return res.status(200).json({ init_point: checkout.init_point })
      // const initPoint: string = checkout.init_point
      // return res.redirect(initPoint)
      // si es exitoso los llevamos a la url de Mercado Pago
      // o si queres devolver la url al front
    } catch (err) {
      // si falla devolvemos un status 500
      return res.status(500).json({
        error: true,
        msg: err,
      })
    }
  }
  webhook = (req: any, res: Response) => {
    if (req.method === 'POST') {
      let body = ''
      req.on('data', (chunk: any) => {
        body += chunk.toString()
      })
      req.on('end', () => {
        console.log(body, 'webhook response')
        res.end('ok')
      })
    }
    return res.status(200)
  }
}

export default AppController
