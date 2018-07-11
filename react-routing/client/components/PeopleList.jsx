import React from 'react'
import {Link} from 'react-router-dom'

import colors from '../../colors.json'

const PeopleList = () => {
  return (
    <div>
      <h1>Color Demo</h1>
      <ul>
        {
          colors.map(
            person => {
              return (
                <li key = {person.id}>
                  <Link to={`/person/${person.id}`} >
                    {person.name}
                  </Link>
                </li>
              )
            })
        }
      </ul>
    </div>
  )
}

export default PeopleList
