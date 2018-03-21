function show (msg) {
  console.log(msg)
}

function display () {
  console.log('default message')
}

function doWork (fn, message) {
  fn(message)
}

doWork(show, 'cool, eh?')
doWork(display)
