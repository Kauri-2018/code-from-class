const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

db('todos')
  .select('task', 'priority')
  .then(result => {
    console.log('result:', result)
    result.forEach(todo => {
      console.log(todo.task, todo.priority)
    })
  })
  .then(() => {
    db.destroy()
  })
  .catch(err => {
    console.error(err)
  })
