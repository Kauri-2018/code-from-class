exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'task 1', priority: 5, is_done: false},
        {id: 2, task: 'task 2', priority: 3, is_done: true},
        {id: 3, task: 'task 3', priority: 1, is_done: false}
      ])
    })
}
