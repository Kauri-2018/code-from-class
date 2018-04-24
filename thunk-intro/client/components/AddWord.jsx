import React from 'react'
import {connect} from 'react-redux'
import {addWord} from '../actions'

function submitWord (e, dispatchWord) {
  if (e.keyCode === 13) {
    dispatchWord(e.currentTarget.value)
    e.currentTarget.value = ''
  }
}

const AddWord = (props) => (
  <input
    placeholder='Enter a word or phrase'
    onKeyUp={e => {
      // the connect() call below puts
      // dispatch directly on props
      submitWord(e, props.dispatchAddWord)
    }}
  />
)

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddWord: word => {
      dispatch(addWord(word))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddWord)
