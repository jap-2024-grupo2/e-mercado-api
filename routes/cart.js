import { Router } from 'express'
import { CartController } from '../controllers/cart.js'
import { CartModel } from '../models/cart.js'

export const createCartRouter = () => {
  const router = Router()
  const cartController = new CartController({ cartModel: CartModel })

  router.post('/', cartController.create)
  router.post('/cart', cartController.saveCart)

  return router
}
