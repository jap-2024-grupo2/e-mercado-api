import { readFileSync } from 'fs'
import pool from './mariadb/pool.js'

export class CartModel {
  static async create() {
    try {
      const filePath = './data/cart/buy.json'

      const response = JSON.parse(readFileSync(filePath, 'utf-8'))
      return response
    } catch (error) {
      console.error('Error al leer el archivo buy.json:', error)
      return { msg: 'Error al procesar la solicitud' } // Mensaje de error genérico
    }
  }

  static async saveCart(userId, products) {
    let connection
    try {
      connection = await pool.getConnection()
      await connection.beginTransaction()

      // Verificamos si ya existe un carrito para el usuario
      let [cart] = await connection.query(
        'SELECT cart_id FROM carts WHERE user_id = ?',
        [userId]
      )
      let cartId

      if (!cart) {
        // Creamos un nuevo carrito si no existe
        const result = await connection.query(
          'INSERT INTO carts (user_id) VALUES (?)',
          [userId]
        )
        cartId = result.insertId
      } else {
        cartId = cart.cart_id
      }

      // Limpiamos productos existentes en el carrito
      await connection.query('DELETE FROM product_cart WHERE cart_id = ?', [
        cartId
      ])

      // Insertamos nuevos productos en el carrito
      for (const product of products) {
        await connection.query(
          'INSERT INTO product_cart (cart_id, product_id, quantity) VALUES (?, ?, ?)',
          [cartId, product.product_id, product.quantity]
        )
      }

      await connection.commit()
      return { msg: 'Carrito guardado exitosamente.' }
    } catch (error) {
      if (connection) await connection.rollback()
      console.error('Error al guardar el carrito:', error)
      throw new Error('Error al guardar el carrito')
    } finally {
      if (connection) connection.release()
    }
  }
}
