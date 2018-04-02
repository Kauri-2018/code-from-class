function doAsyncWork (num) {
  console.log('about to do some work')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('wait time is over')
      num < 10 ? reject(new Error('num too low')) : resolve(num * 10)
    }, 3000)
  })
}

doAsyncWork(11)
  .then(showFinalMsg)
  .then(celebrate)
  .catch(showErrorMsg)

function showFinalMsg (result) {
  console.log('in the callback fn:', result)
  return result
}

function celebrate (val) {
  console.log('WooHoo!', val)
  return 'giving it a shot'
}

function showErrorMsg (err) {
  console.error('Uh oh,', err.message)
}
