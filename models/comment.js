import { readFileSync, writeFileSync, existsSync } from 'fs'

const commentsFolder = './data/product_comments/'

export class CommentModel {
  // Obtenemos los comentarios de un producto específico por su ID
  static async getByProductId({ productId }) {
    try {
      const filePath = `${commentsFolder}${productId}.json`

      // Verificamos si el archivo existe
      if (!existsSync(filePath)) {
        return null
      }

      // Leer y parsear el archivo JSON
      const comments = JSON.parse(readFileSync(filePath, 'utf-8'))
      return comments
    } catch (error) {
      console.error(
        `Error al obtener los comentarios del producto ${productId}:`,
        error
      )
      return null
    }
  }

  // Creamos un nuevo comentario para un producto específico
  static async create({ productId, comment }) {
    try {
      const filePath = `${commentsFolder}${productId}.json`

      // Verificamos si el archivo existe, si no, creamos uno nuevo
      let comments = []
      if (existsSync(filePath)) {
        comments = JSON.parse(readFileSync(filePath, 'utf-8'))
      }

      // Agregamos el nuevo comentario
      comments.push(comment)

      // Guardamos los comentarios actualizados en el archivo
      writeFileSync(filePath, JSON.stringify(comments, null, 2))
      return comment
    } catch (error) {
      console.error(
        `Error al agregar un comentario al producto ${productId}:`,
        error
      )
      return null
    }
  }
}
