const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser,
  getUsers,
  addUser
}

function getUsers (conn = connection) {
  return conn('users').select()
}

function getUser (id, conn = connection) {
  return conn('users').where('id', id).first()
}

function addUser (newUser, conn = connection) {
  return conn('users').insert(newUser)
}
