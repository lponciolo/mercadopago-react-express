import { Request, Response, NextFunction } from 'express'
import Logger from '../loaders/logger'
const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Logger.error(
    `${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`
  )
  next(err)
}

export default errorMiddleware
