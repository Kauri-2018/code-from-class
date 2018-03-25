const fs = require('fs')

function readFileContents (path, callback) {
  // const options = {encoding: 'utf-8'}
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      return console.error(err)
    }

    callback(data)
  })
}

function showFileContents (contents) {
  console.info(contents)
}

readFileContents('./data.txt', showFileContents)
