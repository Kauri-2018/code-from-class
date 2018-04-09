import React from 'react'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: props.initialValue
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment () {
    const newValue = this.state.count + 1
    this.setState({
      count: newValue
    })
    this.props.valueChanged(newValue)
  }

  decrement () {
    const newValue = this.state.count - 1
    this.setState({
      count: newValue
    })
    this.props.valueChanged(newValue)
  }

  render () {
    return (
      <div className='counter'>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Counter
