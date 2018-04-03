const env = require('./test-environment')
const db = require('../db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => {
  env.cleanup(testDb)
})

test('test environment is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('getDriverVehicles returns 5 drivers', () => {
  const expected = 5
  return db.getDriverVehicles(testDb)
    .then(drivers => {
      expect(drivers.length).toBe(expected)
    })
})
