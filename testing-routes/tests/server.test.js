const request = require('supertest')

const server = require('../server')

test('/ returns hi there', () => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeFalsy()
      expect(res.text).toBe('hi there')
    })
})

test('/home includes hello again', () => {
  request(server)
    .get('/home')
    .end((err, res) => {
      expect(err).toBeFalsy()
      expect(res.text).toMatch(/hello again/)
    })
})
