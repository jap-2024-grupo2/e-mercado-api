export class CategoryProductController {
  constructor({ categoryProductModel }) {
    this.categoryProductModel = categoryProductModel
  }

  // Obtenemos los productos de una categoría por su ID
  getById = async (req, res) => {
    const { id } = req.params

    // Llamamos al modelo para obtener los productos
    const products = await this.categoryProductModel.getById({
      id: parseInt(id, 10)
    })

    if (products) {
      // Si se encuentran productos, se devuelven
      return res.json(products)
    }

    // Si no se encuentra la categoría, devolvemos un error 404
    res
      .status(404)
      .json({ message: 'Productos no encontrados para esta categoría' })
  }
}
