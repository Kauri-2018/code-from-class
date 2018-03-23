const path = require('path')
const express = require('express')

const server = express()

server.get('/', (req, res) => {
  res.send('hi there')
})

server.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'))
})

module.exports = server
