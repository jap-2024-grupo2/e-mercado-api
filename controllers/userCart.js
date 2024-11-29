export class UserCartController {
  constructor({ userCartModel }) {
    this.userCartModel = userCartModel
  }

  // Obtenemos todos los carritos del sistema
  getAll = async (req, res) => {
    const carts = await this.userCartModel.getAll()
    res.json(carts)
  }

  // Obtenemos el carrito de un usuario específico basado en su ID
  getByUserId = async (req, res) => {
    const { userId } = req.params

    const cart = await this.userCartModel.getByUserId({
      userId: parseInt(userId, 10)
    })

    if (cart) {
      return res.json(cart)
    }

    res.status(404).json({ message: 'Carrito no encontrado para este usuario' })
  }

  // Creamos un nuevo carrito para un usuario con los artículos especificados
  create = async (req, res) => {
    const { userId } = req.params
    const { articles } = req.body

    const newCart = await this.userCartModel.create({
      userId: parseInt(userId, 10),
      articles
    })

    if (newCart) {
      return res.status(201).json(newCart)
    }

    res.status(400).json({ message: 'El carrito ya existe para este usuario' })
  }

  // Actualizamos el carrito de un usuario con una nueva lista de artículos
  updateCart = async (req, res) => {
    const { userId } = req.params
    const { articles } = req.body

    if (!Array.isArray(articles)) {
      return res
        .status(400)
        .json({ error: 'El campo "articles" debe ser un array' })
    }

    const updatedCart = await this.userCartModel.updateCart({
      userId: parseInt(userId, 10),
      articles
    })

    if (updatedCart) {
      return res.json(updatedCart)
    }

    res.status(500).json({ message: 'Error al actualizar el carrito' })
  }

  // Eliminamos el carrito de un usuario basado en su ID
  delete = async (req, res) => {
    const { userId } = req.params

    const result = await this.userCartModel.delete({
      userId: parseInt(userId, 10)
    })

    if (result) {
      return res.json({ message: 'Carrito eliminado con éxito' })
    }

    res.status(404).json({ message: 'Carrito no encontrado para este usuario' })
  }
}
