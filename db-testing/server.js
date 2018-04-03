const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')

const server = express()

module.exports = server

server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.use('/', routes)
