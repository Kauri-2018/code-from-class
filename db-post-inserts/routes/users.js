const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/new', (req, res) => {
  // add user
  const newUser = {...req.body}
  db.addUser(newUser)
    .then(() => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
