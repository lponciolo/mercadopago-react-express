/* eslint-disable require-jsdoc */
const mercadopagoSDK: any = require('mercadopago')

export const mercadoSDKInit = async () => {
  try {
    await mercadopagoSDK.configure({
      access_token: process.env.MP_ACCESS_TOKEN,
    })
    return true
  } catch (err) {
    return err
  }
}

class PaymentService {
  mercadopago: any

  constructor() {
    this.mercadopago = mercadopagoSDK
    // declaramos de la siguiente manera el token, para que sea más fácil cambiarlo dependiendo del ambiente
  }

  async createPaymentMercadoPago() {
    const preference = {
      items: [
        {
          title: 'Cookie',
          unit_price: 100,
          quantity: 1,
        },
      ],
      back_urls: {
        success: `${process.env.DOMAIN_URL}/success`,
        pending: `${process.env.DOMAIN_URL}/pending`,
        failure: `${process.env.DOMAIN_URL}/rejected`,
      },
      notification_url: 'https://mercadopago-checkout.herokuapp.com/webhook',
      auto_return: 'approved',
    }

    try {
      const response = await this.mercadopago.preferences.create(preference)
      return response.body
      // devolvemos la data que devuelve el POST
    } catch (e) {
      console.log(e)
      // mostramos error en caso de que falle el POST
    }
  }
}
// NOTA: TODAS las URLS que usemos tienen que ser reales,
// si prueban con localhost, va a fallar

export default PaymentService
