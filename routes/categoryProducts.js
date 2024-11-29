import { Router } from 'express'
import { CategoryProductController } from '../controllers/categoryProducts.js'
import { CategoryProductModel } from '../models/categoryProduct.js'

export const createCategoryProductRouter = () => {
  const router = Router()
  const categoryProductController = new CategoryProductController({
    categoryProductModel: CategoryProductModel
  })

  router.get('/:id', categoryProductController.getById)

  return router
}
