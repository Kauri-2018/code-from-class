const path = require('path')

const utils = require('../fileUtils')

test('readFile can read file contents', done => {
  // const testPath = path.join(__dirname, 'test-data.txt')
  const testPath = '' // not important
  const mockFs = {
    readFile: (filePath, encoding, cb) => {
      cb(null, 'test data')
    }
  }

  utils.readFile(testPath, contents => {
    expect(contents).toMatch(/test data/)
    done()
  }, mockFs)
})
