import { Router } from 'express'
import { CommentController } from '../controllers/comments.js'
import { CommentModel } from '../models/comment.js'

export const createCommentRouter = () => {
  const router = Router()
  const commentController = new CommentController({
    commentModel: CommentModel
  })

  router
    .get('/:productId', commentController.getByProductId)
    .post('/:productId', commentController.create)

  return router
}
