import { Router } from 'express'
import { ProductController } from '../controllers/products.js'
import { ProductModel } from '../models/product.js'

export const createProductRouter = () => {
  const router = Router()
  const productController = new ProductController({
    productModel: ProductModel
  })

  router.get('/:id', productController.getById)

  return router
}
