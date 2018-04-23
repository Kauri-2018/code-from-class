const initialState = [
  {
    id: 1,
    word: 'Yo!'
  }, {
    id: 2,
    word: 'Alacrity'
  }
]

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_WORD':
      return [
        ...state, {id: action.id, word: action.word}
      ]
    default:
      return state
  }
}
