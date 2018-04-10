import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import PeopleList from './PeopleList'
import PersonColor from './PersonColor'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route exact path='/' component={PeopleList} />
        <Route path='/person/:id' component={PersonColor} />
      </div>
    </Router>
  )
}

export default App
