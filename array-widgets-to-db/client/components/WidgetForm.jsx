import React from 'react'

const defaultState = {
  name: '',
  price: '',
  mfg: '',
  inStock: ''
}

export default class WidgetForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = props.widget ? {...props.widget} : defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (this.state !== nextProps.widget) {
      this.setState({...nextProps.widget})
    }
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    this.setState({...defaultState})
    const widget = this.state
    this.props.save(widget)
    e.preventDefault()
  }

  render () {
    return (
      <div className='widget-form'>
        <form>
          <p><input placeholder='Name' name='name'
            onChange={this.handleChange}
            value={this.state.name}
          /></p>
          <p><input placeholder='Price' name='price'
            onChange={this.handleChange}
            value={this.state.price}
          /></p>
          <p><input placeholder='Manufacturer' name='mfg'
            onChange={this.handleChange}
            value={this.state.mfg}
          /></p>
          <p><input placeholder='In stock' name='inStock'
            onChange={this.handleChange}
            value={this.state.inStock}
          /></p>
          <button onClick={this.handleSubmit}>Save widget</button> {' '}
          <a href='#' onClick={this.props.cancel}>Cancel</a>
        </form>
      </div>
    )
  }
}
