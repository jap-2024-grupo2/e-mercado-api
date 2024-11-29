import { Router } from 'express'
import { CategoryController } from '../controllers/categories.js'
import { CategoryModel } from '../models/category.js'

export const createCategoryRouter = () => {
  const categoryRouter = Router()
  const categoryController = new CategoryController({
    categoryModel: CategoryModel
  })

  categoryRouter
    .get('/', categoryController.getAll)
    .get('/:id', categoryController.getById)
    .post('/', categoryController.create)
    .patch('/:id', categoryController.update)
    .delete('/:id', categoryController.delete)

  return categoryRouter
}
