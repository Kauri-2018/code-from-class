import request from 'superagent'

const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
const sentimentKey = '8zdlxkbEjqmshIg0JzR0qN5Ndqc3p1PXmhXjsnJvX4hNVR2Yio'
const sentimentUrl = 'https://community-sentiment.p.mashape.com/text/'

export function getApod () {
  return request.get(apiUrl)
    .then(res => {
      return res.body
    })
}

export function getSentiment (phrase) {
  return request.post(sentimentUrl)
    .set('X-Mashape-Key', sentimentKey)
    .send(`txt=${phrase}`)
}
