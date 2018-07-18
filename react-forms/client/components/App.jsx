import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import AddHomeTown from './AddHomeTown'
import HomeTownList from './HomeTownList'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [
        {
          id: 1,
          person: 'don',
          town: 'jacksonville'
        }, {
          id: 2,
          person: 'mayur',
          town: 'labasa'
        }
      ]
    }
  }

  render () {
    return (
      <Router>
        <div className='app'>
          <h1>Home towns</h1>
          <Route exact path='/' render={() => {
            return <HomeTownList list={this.state.list} />
          }} />
          <Route path='/add' render={() => {
            return <AddHomeTown addToList={this.addToList} />
          }} />
        </div>
      </Router>
    )
  }
}

export default App
