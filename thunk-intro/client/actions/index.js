import request from 'superagent'

export const getWords = () => {
  return (dispatch) => {
    request.get('/api/v1/words')
      .then(res => {
        const action = showWords(res.body.words)
        dispatch(action)
      })
  }
}

export function showWords (words) {
  return {
    type: 'SHOW_WORDS',
    words: words.map((word, id) => ({
      id: id + 1,
      word
    }))
  }
}

export const addWord = (word) => {
  return (dispatch) => {
    request.post('/api/v1/words')
      .send({word})
      .then(() => {
        dispatch(getWords())
      })
  }
}
