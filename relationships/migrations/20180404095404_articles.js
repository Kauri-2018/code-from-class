exports.up = (knex, Promise) => {
  return knex.schema.createTable('articles', table => {
    table.increments('id').primary()
    table.string('title')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('articles')
}
