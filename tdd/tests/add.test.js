const add = require('../add')

test('can add 2 and 3', () => {
  const expected = 5

  const actual = add(2, 3)

  expect(actual).toBe(expected)
})

test('can add 5 and 8', () => {
  const expected = 13

  const actual = add(5, 8)

  expect(actual).toBe(expected)
})

test.skip('can add 345 and 876')
