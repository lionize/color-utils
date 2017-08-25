import hexToInt from './hexToInt'

test('parses 2-letter hex to int', () => {
  const hex = 'FF'
  const result = hexToInt(hex)
  const expected = 255

  expect(result).toEqual(expected)
})
