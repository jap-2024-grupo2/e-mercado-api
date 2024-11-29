import { readFileSync } from 'fs'

export class SellModel {
  static async getMessage() {
    try {
      const filePath = './data/sell/publish.json'

      const response = JSON.parse(readFileSync(filePath, 'utf-8'))
      return response
    } catch (error) {
      console.error('Error al leer el archivo publish.json:', error)
      return { msg: 'Error al procesar la solicitud' } // Mensaje de error genérico
    }
  }
}
