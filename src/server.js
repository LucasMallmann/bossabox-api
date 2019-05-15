require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const validate = require('express-validation')
const Youch = require('youch')

const databaseConfig = require('./config/database')

class App {
  constructor () {
    this.isDev = process.env.NODE_ENV === 'development'
    this.express = express()
    this.middlewares()
    this.routes()
    this.database()
    this.exception()
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

  exception () {
    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err)
      }

      if (this.isDev) {
        const youch = new Youch(err, req)
        return res.json(await youch.toJSON())
      }
    })
  }
}

module.exports = new App().express
