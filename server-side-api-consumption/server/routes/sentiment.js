const express = require('express')

const getSentiment = require('../apiClient').getSentiment

const router = express.Router()

router.get('/', (req, res) => {
  getSentiment(req.query.phrase)
    .then(response => {
      res.json(response.body.result)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
