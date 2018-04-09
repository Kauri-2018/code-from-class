import React from 'react'

class Child extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='child'>
        <div>I&apos;m the child, {this.props.firstname}</div>
        <div>My parent is {this.props.parent.name}</div>
        <ul>
          {this.props.colors.map(color => {
            return <li key={color}>{color}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Child
