import { randomUUID } from 'node:crypto'
import { readFileSync } from 'fs'

// Cargamos los datos de categorías desde los JSON
const dataPath = './data/categories/cat.json'
const categories = JSON.parse(readFileSync(dataPath, 'utf-8'))

export class CategoryModel {
  static async getAll() {
    return categories
  }

  static async getById({ id }) {
    const category = categories.find((cat) => cat.id === id)
    return category || null
  }

  static async create({ category }) {
    const newCategory = { id: randomUUID(), ...category }
    categories.push(newCategory)
    return newCategory
  }

  static async update({ id, category }) {
    const index = categories.findIndex((cat) => cat.id === id)
    if (index === -1) return null

    categories[index] = { ...categories[index], ...category }
    return categories[index]
  }

  static async delete({ id }) {
    const index = categories.findIndex((cat) => cat.id === id)
    if (index === -1) return false

    categories.splice(index, 1)
    return true
  }
}
