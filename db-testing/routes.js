const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getDriverVehicles()
    .then(results => {
      console.log(results)
      const formatted = formatResults(results)
      // console.log(formatted)
      res.render('home', {drivers: formatted})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

function formatResults (results) {
  const formatted = []
  results.forEach(result => {
    if (!formatted.some(item => item.name === result.name)) {
      formatted.push({
        id: result.driverId,
        name: result.name,
        plates: [result.plate]
      })
    } else {
      const existing = formatted.find(item => item.name === result.name)
      existing.plates.push(result.plate)
    }
  })
  return formatted
}

module.exports = router
