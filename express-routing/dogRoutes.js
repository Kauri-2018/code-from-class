const express = require('express')

const routes = express.Router()

module.exports = routes

// route is /dogs
routes.get('/', (req, res) => {
  res.send('root dog route')
})

// route is /dogs/lab
routes.get('/lab', (req, res) => {
  res.send('lab route')
})
