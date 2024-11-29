export class CategoryController {
  constructor({ categoryModel }) {
    this.categoryModel = categoryModel
  }

  validateCategory = (category) => {
    const requiredFields = ['name', 'description', 'productCount', 'imgSrc'] // Campos que son obligatorios
    const missingFields = requiredFields.filter((field) => !category[field]) // Buscamos los campos obligatorios que están ausentes o tienen valores no válidos
    return missingFields.length === 0
      ? { success: true } // Si no faltan campos, devolvemos un objeto con éxito
      : {
          success: false, // Si hay campos faltantes, devolvemos un error indicando cuáles son
          error: `Faltan campos obligatorios: ${missingFields.join(', ')}`
        }
  }

  // Obtenemos todas las categorías
  getAll = async (req, res) => {
    const categories = await this.categoryModel.getAll()
    res.json(categories)
  }

  // Obtenemos una categoría por su ID
  getById = async (req, res) => {
    const { id } = req.params
    const category = await this.categoryModel.getById({ id: parseInt(id, 10) })
    if (category) return res.json(category)
    res.status(404).json({ message: 'Categoría no encontrada' })
  }

  // Creamos una categoría
  create = async (req, res) => {
    const category = req.body

    const { success, error } = this.validateCategory(category)
    if (!success) {
      return res.status(400).json({ error })
    }

    const newCategory = await this.categoryModel.create({ category })
    res.status(201).json(newCategory)
  }

  // Modificamos/actualizamos una categoría
  update = async (req, res) => {
    const { id } = req.params
    const category = req.body

    const { success, error } = this.validateCategory(category)
    if (!success) {
      return res.status(400).json({ error })
    }

    const updatedCategory = await this.categoryModel.update({
      id: parseInt(id, 10),
      category
    })
    if (updatedCategory) return res.json(updatedCategory)
    res.status(404).json({ message: 'Categoría no encontrada' })
  }

  // Eliminamos una categoría
  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.categoryModel.delete({ id: parseInt(id, 10) })
    if (result) return res.json({ message: 'Categoría eliminada con éxito' })
    res.status(404).json({ message: 'Categoría no encontrada' })
  }
}
