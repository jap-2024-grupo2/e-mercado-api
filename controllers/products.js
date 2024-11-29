export class ProductController {
  constructor({ productModel }) {
    this.productModel = productModel
  }

  // Obtenemos un producto por su ID
  getById = async (req, res) => {
    const { id } = req.params

    // Llamamos al modelo para obtener el producto
    const product = await this.productModel.getById({ id: parseInt(id, 10) })

    if (product) {
      // Si se encuentra el producto, lo devolvemos
      return res.json(product)
    }

    // Si no se encuentra, devolvemos un error 404
    res.status(404).json({ message: 'Producto no encontrado' })
  }
}
