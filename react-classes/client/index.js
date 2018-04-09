import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './components/Hello'

const data = {
  name: 'humans',
  colors: ['red', 'blue', 'yellow']
}

const view = <Hello name={data.name} colors={data.colors} />

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
