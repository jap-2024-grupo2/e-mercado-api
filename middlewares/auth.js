import jwt from 'jsonwebtoken'

process.loadEnvFile()

export const authMiddleware =
  (excludedRoutes = []) =>
  (req, res, next) => {
    // Comprobamos si la ruta actual está en la lista de exclusión
    if (excludedRoutes.includes(req.path)) {
      return next() // Si la ruta está excluida, pasa al siguiente middleware o controlador
    }
    const token = req.headers['access-token']

    if (!token) {
      return res.status(401).json({ message: 'Token no proporcionado' })
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.SECRET_KEY || 'claveultrasecreta'
      )
      req.user = decoded // Añadimos el usuario al objeto de solicitud para futuras referencias
      next()
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        res.status(401).json({ message: 'Token expirado' })
      } else {
        res.status(401).json({ message: 'Token inválido' })
      }
    }
  }
