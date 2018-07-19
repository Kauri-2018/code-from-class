import React from 'react'
import {Link} from 'react-router-dom'

class AddHomeTown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      person: '',
      town: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAdd () {
    this.props.addToList(this.state)
  }
  render () {
    return (
      <div>
        Person: <input type="text" name="person" onChange={this.handleChange}/>
        Town: <input type="text" name="town" onChange={this.handleChange}/>
        <br/>
        <Link to="/" onClick={this.handleAdd}>Add</Link>
      </div>
    )
  }
}

export default AddHomeTown
