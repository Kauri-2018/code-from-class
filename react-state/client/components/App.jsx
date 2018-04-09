import React from 'react'

import Counter from './Counter'

const initialValue = 400

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'green'
    }
    this.valueChanged = this.valueChanged.bind(this)
  }

  valueChanged (newValue) {
    this.setState({
      color: newValue >= 400 ? 'green' : 'red'
    })
  }

  render () {
    return (
      <div className='app'>
        <h1 style={this.state}>React Counter</h1>
        <Counter initialValue={initialValue} valueChanged={this.valueChanged} />
      </div>
    )
  }
}

export default App
