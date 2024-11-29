export class SellController {
  constructor({ sellModel }) {
    this.sellModel = sellModel
  }

  getMessage = async (req, res) => {
    const response = await this.sellModel.getMessage()
    res.status(201).json(response)
  }
}
