import { Router } from 'express'
import { SellController } from '../controllers/sell.js'
import { SellModel } from '../models/sell.js'

export const createSellRouter = () => {
  const router = Router()
  const sellController = new SellController({ sellModel: SellModel })

  router.get('/', sellController.getMessage)

  return router
}
