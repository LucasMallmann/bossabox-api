const Tool = require('../models/Tool')
const mongoose = require('mongoose')
const isValidId = mongoose.Types.ObjectId.isValid

class ToolController {
  async index (req, res) {
    const filters = {}

    if (req.query.tag) {
      filters.tags = req.query.tag
    }

    if (req.query.title) {
      filters.title = req.query.title
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
    const { id } = req.params
    if (!isValidId(id)) {
      return res.status(404).json({ error: 'The id provided is not valid' })
    }
    const tool = await Tool.findByIdAndUpdate(id, req.body, {
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
