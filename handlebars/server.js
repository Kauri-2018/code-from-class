const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// configure
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.get('/', (req, res) => {
  const homeData = {
    copyright: 2018,
    showColors: true,
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
