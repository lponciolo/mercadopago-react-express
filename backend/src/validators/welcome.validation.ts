import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import validateRequest from './index'

const Schema = Joi.object({})

const welcomeValidationSchema = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return validateRequest(req, next, Schema)
}

export { welcomeValidationSchema }
