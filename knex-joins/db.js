const knex = require('knex')

const config = require('./knexfile').development

const db = knex(config)

function getDrivers () {
  return db('drivers')
    .join('vehicles', 'drivers.id', '=', 'vehicles.driver_id')
    .select('drivers.name', 'vehicles.plate')
}

module.exports = {
  getDrivers
}
