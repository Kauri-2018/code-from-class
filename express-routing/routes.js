const fs = require('fs')
const path = require('path')
const express = require('express')

const routes = express.Router()

module.exports = routes

routes.get('/', (req, res) => {
  const dataPath = path.join(__dirname, 'characters.json')
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Cannot read data file')
    }

    const characters = JSON.parse(data)
    const homeData = {characters: characters}
    res.render('home', homeData)
  })
})

// route is /next
routes.get('/next', (req, res) => {
  const nextData = {}
  res.render('next', nextData)
})

routes.get('/dogs', (req, res) => {
  res.send('the wrong dog route')
})
