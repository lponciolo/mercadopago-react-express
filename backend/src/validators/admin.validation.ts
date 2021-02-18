import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import { validateHeadersAndBody } from './index'

const headersSchema = Joi.object({
  authorization: Joi.string().required().empty(),
})

const bodySchema = Joi.object({})

const getAdminRouteValidationSchema = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return validateHeadersAndBody(req, headersSchema, bodySchema, next)
}

export { getAdminRouteValidationSchema }
