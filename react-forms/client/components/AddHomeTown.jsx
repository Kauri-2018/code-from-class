import React from 'react'
import {Link} from 'react-router-dom'

class AddHomeTown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      person: '',
      town: ''
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAdd (e) {
    e.preventDefault()
    this.props.addToList(this.state)
  }

  render () {
    return (
      <div className='add-home-town'>
        <h2>Add</h2>
        <form onSubmit={this.handleAdd}>
          Person: <input name='person' onChange={this.handleChange} />
          Town: <input name='town' onChange={this.handleChange} />
          <button type='submit'>Add</button>
        </form>
        <p><Link to='/'>List</Link></p>
      </div>
    )
  }
}

export default AddHomeTown
