import React from 'react'

class AddHomeTown extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        Person: <input type="text" name="person" />
        Town: <input type="text" name="town" />
      </div>
    )
  }
}

export default AddHomeTown
