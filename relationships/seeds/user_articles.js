exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('user_articles').del()
    .then(() => {
      // Inserts seed entries
      return knex('user_articles').insert([
        {id: 1, user_id: '99902', article_id: 3},
        {id: 2, user_id: '99904', article_id: 1},
        {id: 3, user_id: '99906', article_id: 2}
      ])
    })
}
