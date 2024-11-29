import { Router } from 'express'
import { login } from '../controllers/auth.js'

export const createAuthRouter = () => {
  const router = Router()

  router.post('/', login)

  return router
}
