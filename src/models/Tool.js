const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const ToolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

ToolSchema.plugin(paginate)

module.exports = mongoose.model('Tool', ToolSchema)
