import express, { json } from 'express'
import { authMiddleware } from './middlewares/auth.js'
import { corsMiddleware } from './middlewares/cors.js'
import { createAuthRouter } from './routes/auth.js'
import { createCartRouter } from './routes/cart.js'
import { createCategoryProductRouter } from './routes/categoryProducts.js'
import { createCategoryRouter } from './routes/categories.js'
import { createCommentRouter } from './routes/comments.js'
import { createProductRouter } from './routes/products.js'
import { createSellRouter } from './routes/sell.js'
import { createUserCartRouter } from './routes/userCart.js'

const app = express()

// Middlewares
app.use(json())
app.use(corsMiddleware())
app.use(authMiddleware(['/login'])) // Le pasamos la ruta /login ya que es la única pública, no necesita autenticación
app.disable('x-powered-by')

// Rutas
app
  .use('/login', createAuthRouter())
  .use('/cart', createCartRouter())
  .use('/categories', createCategoryRouter())
  .use('/category-products', createCategoryProductRouter())
  .use('/comments', createCommentRouter())
  .use('/products', createProductRouter())
  .use('/sell', createSellRouter())
  .use('/user-cart', createUserCartRouter())

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en el puerto http://localhost:${PORT}`)
})
