exports.up = (knex, Promise) => {
  return knex.schema.createTable('drivers', table => {
    table.increments('id')
    table.string('name')
    table.text('address')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('drivers')
}
