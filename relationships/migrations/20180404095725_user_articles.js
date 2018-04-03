exports.up = (knex, Promise) => {
  return knex.schema.createTable('user_articles', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('article_id').references('articles.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('user_articles')
}
