import { readFileSync } from 'fs'

export class CategoryProductModel {
  static async getById({ id }) {
    try {
      // Intentamos leer el archivo JSON correspondiente al ID
      const filePath = `./data/category_products/${id}.json`
      const products = JSON.parse(readFileSync(filePath, 'utf-8'))
      return products
    } catch (error) {
      // Si no existe el archivo o hay un error, retornamos null
      return null
    }
  }
}
