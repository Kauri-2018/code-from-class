import React from 'react'
import {Link} from 'react-router-dom'

const HomeTownList = (props) => {
  return (
    <div className='home-town-list'>
      <h2>List</h2>
      <ul>
        {props.list.map(item => {
          return <li key={item.id}>{item.person}: {item.town}</li>
        })}
      </ul>
      <p><Link to='/add'>Add</Link></p>
    </div>
  )
}

export default HomeTownList
