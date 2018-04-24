const express = require('express')

const router = express.Router()

const words = [
  'wun',
  'tu',
  'three'
]

router.get('/', (req, res) => {
  res.json({words})
})

router.post('/', (req, res) => {
  const newWord = req.body.word
  words.push(newWord)
  res.sendStatus(200)
})

module.exports = router
