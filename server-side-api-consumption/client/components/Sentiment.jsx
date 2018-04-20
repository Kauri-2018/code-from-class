import React from 'react'

import {getSentiment} from '../apiClient'

class Sentiment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      confidence: 0,
      sentiment: '',
      phrase: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    getSentiment(this.state.phrase)
      .then(res => {
        this.setState({
          confidence: res.body.confidence,
          sentiment: res.body.sentiment
        })
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>Sentiment analysis</h1>
        <p>
          <input name='phrase' onChange={this.handleChange} />
          <button onClick={this.handleClick}>Get Sentiment</button>
        </p>
        {this.state.sentiment && <div>
          <p>Sentiment: {this.state.sentiment}</p>
          <p>Confidence: {this.state.confidence}</p>
        </div>}
      </div>
    )
  }
}

export default Sentiment
