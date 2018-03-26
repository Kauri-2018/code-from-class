const path = require('path')

const utils = require('./fileUtils')

const filePath = path.join(__dirname, './data.txt')

utils.readFile(filePath, (contents) => {
  console.info(contents)
})
