import React from 'react'
import {Link} from 'react-router-dom'

import list from '../../colors.json'

const PeopleList = () => {
  return (
    <div className='people-list'>
      <h1>People List</h1>
      <ul>
        {list.map(person => {
          return (
            <li key={person.id}>
              <Link to={`/person/${person.id}`}>{person.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PeopleList
