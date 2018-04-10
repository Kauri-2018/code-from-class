import React from 'react'

import ColorName from './ColorName'
import list from '../../colors.json'

class PersonColor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowingColor: false
    }
    this.toggleColor = this.toggleColor.bind(this)
  }

  toggleColor () {
    this.setState({
      isShowingColor: !this.state.isShowingColor
    })
  }

  render () {
    const id = Number(this.props.match.params.id)
    const person = list.find(p => p.id === id)
    const color = {color: person.color}
    return (
      <div className='person-color'>
        <h1 style={color}>{person.name}</h1>
        <button onClick={this.toggleColor}>Toggle colour name</button>
        {/* this.state.isShowingColor ? <ColorName name={person.color} /> : null */}
        {this.state.isShowingColor && <ColorName name={person.color} />}
      </div>
    )
  }
}

export default PersonColor
