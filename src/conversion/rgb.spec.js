import { rgbStringToHex } from './rgb'

test('rgbStringToHex', () => {
  const rgbStr = 'rgb(255, 255, 255)'
  let expected = '#FFFFFF'

  expect(rgbStringToHex(rgbStr)).toEqual(expected)

  const rgbaStr = 'rgb(255, 255, 255, 1)'
  expected = '#FFFFFFFF'

  expect(rgbStringToHex(rgbaStr)).toEqual(expected)
})
