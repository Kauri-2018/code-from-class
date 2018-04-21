exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('widgets').del()
    .then(() => {
      // Inserts seed entries
      return knex('widgets').insert([
        {
          id: 1,
          name: 'Red widget',
          price: 23.45,
          mfg: 'Acme Inc.',
          in_stock: 4
        }, {
          id: 2,
          name: 'Blue widget',
          price: 423.47,
          mfg: 'Acme Inc.',
          in_stock: 8
        }, {
          id: 3,
          name: 'Yellow widget',
          price: 123.40,
          mfg: 'Acme Inc.',
          in_stock: 3
        }
      ])
    })
}
