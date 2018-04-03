exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(() => {
      // Inserts seed entries
      return knex('articles').insert([
        {id: 1, title: 'article 1'},
        {id: 2, title: 'article 2'},
        {id: 3, title: 'article 3'}
      ])
    })
}
