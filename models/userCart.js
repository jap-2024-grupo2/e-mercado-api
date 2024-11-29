import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'fs'

const userCartFolder = './data/user_cart/'

export class UserCartModel {
  // Obtenemos todos los carritos almacenados en la carpeta
  static async getAll() {
    try {
      // Leemos todos los archivos JSON en la carpeta
      const files = readdirSync(userCartFolder).filter((file) =>
        file.endsWith('.json')
      )
      const carts = files.map((file) => {
        const cartData = readFileSync(`${userCartFolder}${file}`, 'utf-8')
        return JSON.parse(cartData)
      })
      return carts
    } catch (error) {
      console.error('Error al obtener todos los carritos:', error)
      return []
    }
  }

  // Obtenemos el carrito de un usuario específico por su ID
  static async getByUserId({ userId }) {
    try {
      const filePath = `${userCartFolder}${userId}.json`

      if (!existsSync(filePath)) {
        return null // Si no existe el archivo, retornamos null
      }

      const cart = JSON.parse(readFileSync(filePath, 'utf-8'))
      return cart
    } catch (error) {
      console.error(`Error al obtener el carrito del usuario ${userId}:`, error)
      return null
    }
  }

  // Creamos un nuevo carrito para un usuario si no existe previamente
  static async create({ userId, articles }) {
    try {
      const filePath = `${userCartFolder}${userId}.json`

      if (existsSync(filePath)) {
        return null // Si ya existe, no creamos uno nuevo
      }

      const newCart = { user: userId, articles: articles || [] }
      writeFileSync(filePath, JSON.stringify(newCart, null, 2))
      return newCart
    } catch (error) {
      console.error(`Error al crear el carrito del usuario ${userId}:`, error)
      return null
    }
  }

  // Actualizamos los artículos en el carrito de un usuario específico
  static async updateCart({ userId, articles }) {
    try {
      const filePath = `${userCartFolder}${userId}.json`

      let cart = { user: userId, articles: [] }
      if (existsSync(filePath)) {
        cart = JSON.parse(readFileSync(filePath, 'utf-8'))
      }

      cart.articles = articles

      writeFileSync(filePath, JSON.stringify(cart, null, 2))
      return cart
    } catch (error) {
      console.error(
        `Error al actualizar el carrito del usuario ${userId}:`,
        error
      )
      return null
    }
  }

  // Eliminamos el carrito de un usuario específico
  static async delete({ userId }) {
    try {
      const filePath = `${userCartFolder}${userId}.json`

      if (!existsSync(filePath)) {
        return false // Si no existe, no hay nada que eliminar
      }

      unlinkSync(filePath)
      return true
    } catch (error) {
      console.error(
        `Error al eliminar el carrito del usuario ${userId}:`,
        error
      )
      return false
    }
  }
}
