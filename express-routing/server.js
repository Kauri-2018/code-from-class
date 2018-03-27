const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')
const dogRoutes = require('./dogRoutes')

const server = express()

// configure
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

// routes
server.use('/', routes)
server.use('/dogs', dogRoutes)

module.exports = server
