const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    fruits: ['banana', 'apple', 'feijoa']
  })
})

module.exports = router
