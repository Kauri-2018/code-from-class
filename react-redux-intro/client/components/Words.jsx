import React from 'react'
import {connect} from 'react-redux'

import Word from './Word'

const Words = (props) => (
  <div>
    {props.words.map(word =>
      <Word key={word.id}
        {...word}
      />
    )}
  </div>
)

function mapStateToProps (state) {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(Words)
