require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const databaseConfig = require('./config/database')

class App {
  constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
    this.database()
  }

  middlewares () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./routes'))
  }

  database () {
    const { uri } = databaseConfig
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
  }
}

module.exports = new App().express
