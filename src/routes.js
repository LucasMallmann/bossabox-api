const express = require('express')
const routes = express.Router()
const validate = require('express-validation')
const handle = require('express-async-handler')
const cors = require('cors')

const controllers = require('./controllers')
const toolValidation = require('./validations/Tool')
const userValidation = require('./validations/User')
const authMiddleware = require('./middlewares/auth')

routes.use(cors())

routes.post('/user', validate(userValidation), controllers.UserController.store)
routes.post(
  '/login',
  validate(userValidation),
  controllers.AuthController.login
)

// All routes bellow are protected with jwt
routes.use(authMiddleware)

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
