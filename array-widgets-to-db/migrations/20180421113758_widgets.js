exports.up = (knex, Promise) => {
  return knex.schema.createTable('widgets', table => {
    table.increments('id').primary()
    table.string('name')
    table.decimal('price')
    table.string('mfg')
    table.integer('in_stock')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('widgets')
}
