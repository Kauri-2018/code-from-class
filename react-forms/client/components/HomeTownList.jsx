import React from 'react'

class HomeTownList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ul>
        {this.props.list.map(item =>
          (<li key={item.id}>{item.person}: {item.town}</li>)
        )}
      </ul>
    )
  }
}

export default HomeTownList
