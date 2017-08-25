import hexToRgbString from './hexToRgbString'

test('converts 6-letter hex to rgb string', () => {
  const hex = '#ff6347'
  const result = hexToRgbString(hex)
  const expected = "rgb(255, 99, 71)"

  expect(result).toEqual(expected)
})

test('converts 3-letter hex to rgb string', () => {
  const hex = '#FFF'
  const result = hexToRgbString(hex)
  const expected = "rgb(255, 255, 255)"

  expect(result).toEqual(expected)
})

test('converts 6-letter hex with alpha to rgba string', () => {
  const hex = '#ff6347'
  const alpha = '0.5'
  const result = hexToRgbString(hex, alpha)
  const expected = "rgba(255, 99, 71, 0.5)"

  expect(result).toEqual(expected)
})

test('converts 3-letter hex with alpha to rgba string', () => {
  const hex = '#FFF'
  const alpha = '0.5'
  const result = hexToRgbString(hex, alpha)
  const expected = "rgba(255, 255, 255, 0.5)"

  expect(result).toEqual(expected)
})
