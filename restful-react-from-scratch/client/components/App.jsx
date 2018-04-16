import React from 'react'

import {getFruits} from '../apiClient'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fruits: []
    }
  }

  componentDidMount () {
    getFruits()
      .then(fruits => {
        this.setState({fruits})
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>Fruit FTW!</h1>
        <ul>
          {this.state.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
