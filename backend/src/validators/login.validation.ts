import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import validateRequest from './index'

const Schema = Joi.object({
  username: Joi.string().required().empty(),
  password: Joi.string().required(),
})

const loginValidationSchema = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return validateRequest(req, next, Schema)
}

export { loginValidationSchema }
