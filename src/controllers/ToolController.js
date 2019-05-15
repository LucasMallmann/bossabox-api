const Tool = require('../models/Tool')

class ToolController {
  async index (req, res) {
    const filters = {}

    if (req.query.tag) {
      filters.tags = req.query.tag
    }

    const tools = await Tool.paginate(filters, {
      page: req.query.page || 1,
      limit: req.query.limit || 10,
      sort: '-createdAt'
    })

    return res.status(200).json(tools)
  }

  async store (req, res) {
    const tool = await Tool.create({ ...req.body })
    return res.status(200).json(tool)
  }

  async show (req, res) {
    const tool = await Tool.findById(req.params.id)
    return res.status(200).json(tool)
  }

  async update (req, res) {
    const tool = await Tool.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(tool)
  }

  async destroy (req, res) {
    await Tool.findByIdAndRemove(req.params.id)
    res.send()
  }
}

module.exports = new ToolController()
