const knex = require('knex')

const config = require('./knexfile').development

const devDb = knex(config)

function getDriverVehicles (db = devDb) {
  // const db = testDb || devDb // same thing as the default db parameter
  return db('drivers')
    .join('vehicles', 'drivers.id', '=', 'vehicles.driver_id')
    .select('drivers.id as driverId', 'vehicles.id as vehicleId', 'drivers.name', 'vehicles.plate')
}

module.exports = {
  getDriverVehicles
}
