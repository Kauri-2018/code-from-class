import request from 'supertest'

import server from '../../server/server'

// the server keeps the widgets in memory so no knex setup needed

jest.mock('../../server/db', () => ({
  getWidgets: () => [
    {id: 2, name: 'test user 2', email: 'test2@user.nz'},
    {id: 4, name: 'test user 4', email: 'test4@user.nz'}
  ],
  saveWidget: () => {}, // 200
  deleteWidget: (id) => {}, // 204
  updateWidget: (widget) => {} // 204
}))

test('GET /widgets', () => {
  return request(server)
    .get('/widgets')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
    })
})

test('POST /widgets', () => {
  return request(server)
    .post('/widgets')
    .send({name: 'test'})
    .expect(200)
    .then(res => {
      expect(res).toBeTruthy()
    })
})

test('DELETE /widgets/:id', () => {
  return request(server)
    .delete('/widgets/4')
    .expect(204)
    .then(res => {
      expect(res).toBeTruthy()
    })
})

test('PUT /widgets/:id', () => {
  return request(server)
    .put('/widgets/2')
    .send({name: 'test'})
    .expect(204)
    .then(res => {
      expect(res).toBeTruthy()
    })
})
