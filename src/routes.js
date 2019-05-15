const express = require('express')
const routes = express.Router()
const validate = require('express-validation')
const handle = require('express-async-handler')

const ToolController = require('./controllers/ToolController')
const toolValidation = require('./validations/Tool')

routes.get('/', (req, res, next) => {
  return res.status(200).json({ message: 'hello world' })
})

routes.post('/tools', validate(toolValidation), handle(ToolController.store))
routes.get('/tools', handle(ToolController.index))
routes.get('/tools/:id', handle(ToolController.show))
routes.delete('/tools/:id', handle(ToolController.destroy))
routes.put(
  '/tools/:id',
  validate(toolValidation),
  handle(ToolController.update)
)

module.exports = routes
