const path = require('path')
const express = require('express')

const sentimentRoutes = require('./routes/sentiment')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/sentiment', sentimentRoutes)

module.exports = server
