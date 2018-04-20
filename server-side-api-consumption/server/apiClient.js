const request = require('superagent')

const sentimentKey = '8zdlxkbEjqmshIg0JzR0qN5Ndqc3p1PXmhXjsnJvX4hNVR2Yio'
const sentimentUrl = 'https://community-sentiment.p.mashape.com/text/'

module.exports = {
  getSentiment
}

function getSentiment (phrase) {
  return request.post(sentimentUrl)
    .set('X-Mashape-Key', sentimentKey)
    .send(`txt=${phrase}`)
}
