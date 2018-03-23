const request = require('supertest')
const server = require('../server')

test('/new redirects', done => {
  request(server)
    .post('/new')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({fullname: 'Lucy Lawless'})
    .expect(302)
    .expect('Location', '/hello?name=Lucy%20Lawless')
    .end((err, res) => {
      expect(err).toBeFalsy()
      done()
    })
})

test('/hello greets', done => {
  const name = 'Test user'
  request(server)
    .get(`/hello?name=${name}`)
    .expect(200)
    .end((err, res) => {
      expect(err).toBeFalsy()
      expect(res.text).toMatch(name)
      done()
    })
})
