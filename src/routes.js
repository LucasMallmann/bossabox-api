const express = require('express')
const routes = express.Router()
const validate = require('express-validation')

const ToolController = require('./controllers/ToolController')
const toolValidation = require('./validations/Tool')

routes.get('/', (req, res, next) => {
  return res.status(200).json({ message: 'hello world' })
})

routes.post('/tools', validate(toolValidation), ToolController.store)
routes.get('/tools', ToolController.index)
routes.get('/tools/:id', ToolController.show)
routes.delete('/tools/:id', ToolController.destroy)
routes.put('/tools/:id', validate(toolValidation), ToolController.update)

module.exports = routes
