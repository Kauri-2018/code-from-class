exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(() => {
      // Inserts seed entries
      return knex('vehicles').insert([
        {id: 1, plate: 'ABC123', driver_id: 1},
        {id: 2, plate: 'DEF456', driver_id: 2},
        {id: 3, plate: 'GHI789', driver_id: 2},
        {id: 4, plate: 'JKL234', driver_id: 3},
        {id: 5, plate: 'MNO678', driver_id: 3}
      ])
    })
}
