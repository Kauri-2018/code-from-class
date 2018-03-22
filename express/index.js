const path = require('path')
const express = require('express')

const port = 3000
const server = express()

server.use(express.static('public'))

server.get('/', (req, res) => {
  res.send('Cool, huh?')
})

server.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'))
})

server.get('/bonehead', (req, res) => {
  const name = req.query.name
  res.send('<h1>' + name + ' is a bonehead</h1>')
})

server.get('/:name/:adjective', (req, res) => {
  const name = req.params.name
  const adj = req.params.adjective
  res.send(`<h1>${name} is a ${adj}</h1>`)
})

server.listen(port, () => {
  console.log('server is listening on port', port)
})
