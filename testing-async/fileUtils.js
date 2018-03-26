const fs = require('fs')

module.exports = {
  readFile
}

function readFile (path, callback, fsys = fs) {
  fsys.readFile(path, 'utf-8', (err, data) => {
    if (err) return console.error(err)
    callback(data)
  })
}
