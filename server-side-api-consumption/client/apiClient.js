import request from 'superagent'

const sentimentUrl = '/api/v1/sentiment'

export function getSentiment (phrase) {
  return request.get(sentimentUrl)
    .query({phrase})
}
