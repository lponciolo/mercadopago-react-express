import { Request, Response, NextFunction } from 'express'

const MiddleWare404 = (req: Request, res: Response, next: NextFunction) => {
  return res.status(404).send('Sorry cant find that!')
}

export default MiddleWare404
