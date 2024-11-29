import { Router } from 'express'
import { UserCartController } from '../controllers/userCart.js'
import { UserCartModel } from '../models/userCart.js'

export const createUserCartRouter = () => {
  const router = Router()
  const userCartController = new UserCartController({
    userCartModel: UserCartModel
  })

  router
    .get('/', userCartController.getAll)
    .get('/:userId', userCartController.getByUserId)
    .post('/:userId', userCartController.create)
    .put('/:userId', userCartController.updateCart)
    .delete('/:userId', userCartController.delete)

  return router
}
