const path = require('path')
const express = require('express')

const wordRoutes = require('./wordRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/words', wordRoutes)

module.exports = server
