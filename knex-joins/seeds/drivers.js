exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('drivers').del()
    .then(() => {
      // Inserts seed entries
      return knex('drivers').insert([
        {id: 1, name: 'don', address: '123 Happy Lane'},
        {id: 2, name: 'sarah', address: '456 Jolly Ave'},
        {id: 3, name: 'zoe', address: '789 Cat Street'}
      ])
    })
}
