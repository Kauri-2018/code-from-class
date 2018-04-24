import React from 'react'
import {connect} from 'react-redux'

import Words from './Words'
import AddWord from './AddWord'
import {getWords} from '../actions'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(getWords())
  }

  render () {
    return (
      <div className='app-container'>
        <Words />
        <AddWord />
      </div>
    )
  }
}

export default connect()(App)
