const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// configure
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

// routes
server.get('/', (req, res) => {
  const showColors = ['true', 't', '1'].includes(req.query.colors)
  const homeData = {
    copyright: 2018,
    showColors: showColors,
    colors: [
      {name: 'blue'},
      {name: 'red'},
      {name: 'yellow'}
    ],
    names: [
      'Kale',
      'Zoe',
      'Frank'
    ]
  }
  res.render('home', homeData)
})

server.get('/next', (req, res) => {
  res.render('next', {copyright: 2020})
})

module.exports = server
