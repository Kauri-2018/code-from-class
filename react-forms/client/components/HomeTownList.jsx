import React from 'react'
import {Link} from 'react-router-dom'

class HomeTownList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <p>List</p>
        <ul>
          {this.props.list.map(item =>
            (<li key={item.id}>{item.person}: {item.town}</li>)
          )}
        </ul>
        <Link to="/add">Add</Link>
      </div>
    )
  }
}

export default HomeTownList
