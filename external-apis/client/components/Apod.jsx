import React from 'react'

import {getApod} from '../apiClient'

class Apod extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      url: ''
    }
  }

  componentDidMount () {
    getApod()
      .then(apod => {
        this.setState({
          title: apod.title,
          url: apod.url
        })
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>Astronomy Picture of the Day</h1>
        <h2>{this.state.title}</h2>
        <img src={this.state.url} />
      </div>
    )
  }
}

export default Apod