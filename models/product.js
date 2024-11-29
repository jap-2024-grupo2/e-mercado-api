import { readFileSync, existsSync } from 'fs'

export class ProductModel {
  static async getById({ id }) {
    try {
      // Ruta del archivo JSON del producto
      const filePath = `./data/products/${id}.json`

      // Verificamos si el archivo existe
      if (!existsSync(filePath)) {
        return null // Retornamos null si no existe
      }

      // Leemos y parseamos el archivo JSON
      const product = JSON.parse(readFileSync(filePath, 'utf-8'))
      return product
    } catch (error) {
      console.error(
        `Error al leer el archivo del producto con ID ${id}:`,
        error
      )
      return null // Retornamos null si hay un error
    }
  }
}
