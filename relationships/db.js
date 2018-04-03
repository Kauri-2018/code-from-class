const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getArticles: getArticles
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function getArticles (testConn) {
  const conn = testConn || connection
  return conn('users')
    .join('user_articles', 'users.id', 'user_articles.user_id')
    .join('articles', 'articles.id', 'user_articles.article_id')
    .select('users.id as userId', 'users.name', 'articles.title')
}
