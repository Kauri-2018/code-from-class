const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', function (req, res) {
  db.getWidgets()
    .then(widgets => {
      res.json(widgets)
    })
    .catch(() => {
      res.status(500).send('Database error')
    })
})

router.post('/', function (req, res) {
  const widget = {
    ...req.body
  }
  db.saveWidget(widget)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(() => {
      res.status(500).send('Database error')
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteWidget(id)
    .then(() => {
      res.sendStatus(204)
    })
    .catch(() => {
      res.status(500).send('Database error')
    })
})

router.put('/:id', (req, res) => {
  const widget = {
    id: Number(req.params.id),
    ...req.body
  }
  db.updateWidget(widget)
    .then(() => {
      res.sendStatus(204)
    })
    .catch(() => {
      res.status(500).send('Database error')
    })
})

module.exports = router
