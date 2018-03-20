const talkToMe = require('../index')

test('cow says message', function () {
  const msg = 'test message'
  const result = talkToMe(msg)
  expect(result.includes(msg)).toBeTruthy()
})
