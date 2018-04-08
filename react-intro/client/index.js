const React = require('react')
const ReactDOM = require('react-dom')

function HelloTemplate (props) {
  return (
    <div className='hello-template another-css-class'>
      <div>I am the parent, {props.name}</div>
      <ChildComponent
        firstname='Don'
        lastname='Smith'
        parent={props}
        colors={props.colors} />
      <img src='/image.jpg' />
    </div>
  )
}

function ChildComponent (props) {
  return (
    <div className='child'>
      <div>I&apos;m the child, {props.firstname}</div>
      <div>My parent is {props.parent.name}</div>
      <ul>
        {props.colors.map(color => {
          return <li key={color}>{color}</li>
        })}
      </ul>
    </div>
  )
}

const data = {
  name: 'humans',
  colors: ['red', 'blue', 'yellow']
}
const view = HelloTemplate(data)

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
