const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

test('/?colors=true shows colors', done => {
  request(server)
    .get('/?colors=true')
    .end((err, res) => {
      expect(err).toBeFalsy()
      const $ = cheerio.load(res.text)
      const length = $('.colors li').length
      expect(length).toBe(3)
      done()
    })
})

test("/?colors=false doesn't show colors", done => {
  request(server)
    .get('/?colors=false')
    .end((err, res) => {
      expect(err).toBeFalsy()
      const $ = cheerio.load(res.text)
      const length = $('.colors').length
      expect(length).toBe(0)
      done()
    })
})