import React from 'react'

import Apod from './Apod'
import Sentiment from './Sentiment'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        {/* <Apod /> */}
        <Sentiment />
      </div>
    )
  }
}

export default App
