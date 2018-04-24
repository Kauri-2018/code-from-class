const words = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_WORDS':
      return action.words

    default:
      return state
  }
}

export default words
