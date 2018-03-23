const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.urlencoded({extended: false}))

server.use(express.static('public'))

server.post('/new', (req, res) => {
  const name = req.body.fullname
  res.redirect(`/hello?name=${name}`)
})

server.get('/hello', (req, res) => {
  const name = req.query.name
  res.send(`<h1>Hey there ${name}</h1>`)
})

module.exports = server
