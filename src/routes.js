const express = require('express')
const routes = express.Router()
const validate = require('express-validation')
const handle = require('express-async-handler')

const controllers = require('./controllers')
const toolValidation = require('./validations/Tool')
const userValidation = require('./validations/User')

routes.get('/', (req, res, next) => {
  return res.status(200).json({ message: 'hello world' })
})

routes.post('/user', validate(userValidation), controllers.UserController.store)

routes.post(
  '/tools',
  validate(toolValidation),
  handle(controllers.ToolController.store)
)
routes.get('/tools', handle(controllers.ToolController.index))
routes.get('/tools/:id', handle(controllers.ToolController.show))
routes.delete('/tools/:id', handle(controllers.ToolController.destroy))
routes.put(
  '/tools/:id',
  validate(toolValidation),
  handle(controllers.ToolController.update)
)

module.exports = routes
