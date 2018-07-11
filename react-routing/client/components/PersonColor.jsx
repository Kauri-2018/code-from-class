import React from 'react'
import color from '../../colors.json'

const PersonColor = (props) => {
  const id = Number(props.match.params.id)
  const person = color.find(p => p.id === id)
  return (
    <div>
      <h1 style={{color: person.color}}>{person.name}</h1>
      <button>Toggle Color Name</button>
    </div>
  )
}

export default PersonColor
