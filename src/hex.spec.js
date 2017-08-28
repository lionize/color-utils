import hex from './hex'

test('returns input if input is hex', () => {
  const input = '#fff'
  expect(hex(input)).toEqual(input)
})

test('converts rgb string to hex', () => {
  const input = 'rgba(255, 255, 255, 0.0)'
  expect(hex(input)).toEqual('#FFFFFF00')
})
