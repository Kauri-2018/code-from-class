import React from 'react'

import Child from './Child'

class Hello extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='hello-template another-css-class'>
        <div>I am the parent, {this.props.name}</div>
        <Child
          firstname='Don'
          lastname='Smith'
          parent={this.props}
          colors={this.props.colors} />
        <img src='/image.jpg' />
      </div>
    )
  }
}

export default Hello
