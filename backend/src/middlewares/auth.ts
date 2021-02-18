import jwt from 'jsonwebtoken'
import createError from 'http-errors'

const authenticateJWT = (req: any, res: any, next: any) => {
  const accessTokenSecret = process.env.TOKEN_SECRET as string
  const authHeader = req.headers.authorization

  if (authHeader) {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, accessTokenSecret, (err: any, user: any) => {
      if (err) {
        return next(createError(403))
      }
      req.user = user
      return next()
    })
  } else {
    return next(createError(401))
  }
}

export default authenticateJWT
