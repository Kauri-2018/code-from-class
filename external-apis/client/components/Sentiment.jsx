import React from 'react'

import {getSentiment} from '../apiClient'

const phrase = 'That movie was rubbish'

class Sentiment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      confidence: 0,
      sentiment: ''
    }
  }

  componentDidMount () {
    getSentiment(phrase)
      .then(res => {
        this.setState({
          confidence: res.body.result.confidence,
          sentiment: res.body.result.sentiment
        })
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>Sentiment analysis</h1>
        <h2>{phrase}</h2>
        <p>Sentiment: {this.state.sentiment}</p>
        <p>Confidence: {this.state.confidence}</p>
      </div>
    )
  }
}

export default Sentiment
