export class CommentController {
  constructor({ commentModel }) {
    this.commentModel = commentModel
  }

  validateComment = (comment) => {
    const requiredFields = ['score', 'description', 'user', 'dateTime'] // Campos obligatorios
    const missingFields = requiredFields.filter((field) => !comment[field]) // Verificamos campos faltantes

    return missingFields.length === 0
      ? { success: true } // Si no faltan campos, devolvemos éxito
      : {
          success: false, // Si faltan campos, devolvemos un error
          error: `Faltan campos obligatorios: ${missingFields.join(', ')}`
        }
  }

  // Obtenemos los comentarios por ID de producto
  getByProductId = async (req, res) => {
    const { productId } = req.params

    const comments = await this.commentModel.getByProductId({
      productId: parseInt(productId, 10)
    })

    if (comments) {
      return res.json(comments)
    }

    res
      .status(404)
      .json({ message: 'Comentarios no encontrados para este producto' })
  }

  // Agregamos un comentario a un producto
  create = async (req, res) => {
    const { productId } = req.params
    const comment = req.body

    const { success, error } = this.validateComment(comment)
    if (!success) {
      return res.status(400).json({ error })
    }

    comment.product = parseInt(productId, 10)
    const newComment = await this.commentModel.create({
      productId: productId,
      comment
    })

    if (newComment) {
      return res.status(201).json(newComment)
    }

    res.status(500).json({ message: 'Error al agregar el comentario' })
  }
}
