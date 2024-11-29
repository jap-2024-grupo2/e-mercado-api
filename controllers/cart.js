export class CartController {
  constructor({ cartModel }) {
    this.cartModel = cartModel
  }

  create = async (req, res) => {
    const response = await this.cartModel.create()
    res.status(201).json(response)
  }

  saveCart = async (req, res) => {
    const { userId, products } = req.body

    if (!userId || !Array.isArray(products)) {
      return res.status(400).json({ msg: 'Datos inválidos' })
    }

    try {
      const response = await this.cartModel.saveCart(userId, products)
      res.status(201).json(response)
    } catch (error) {
      res.status(500).json({ msg: 'Error al guardar el carrito' })
    }
  }
}
