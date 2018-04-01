exports.up = (knex, Promise) => {
  return knex.schema.createTable('todos', table => {
    table.increments('id')
    table.string('task')
    table.integer('priority')
    table.boolean('is_done')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('todos')
}
