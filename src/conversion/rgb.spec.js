import { rgbStringToHex, rgbObjectToHex } from './rgb'

test('rgbStringToHex', () => {
  const rgbStr = 'rgb(255, 255, 255)'
  expect(rgbStringToHex(rgbStr)).toEqual('#FFFFFF')

  const rgbaStr = 'rgb(255, 255, 255, 1)'
  expect(rgbStringToHex(rgbaStr)).toEqual('#FFFFFFFF')
})

test('rgbObjectToHex', () => {
  const rgbObj = { r: 255, g: 255, b: 255 }
  expect(rgbObjectToHex(rgbObj)).toEqual('#FFFFFF')

  const rgbaObj = { r: 255, g: 255, b: 255, a: 0.5 }
  expect(rgbObjectToHex(rgbaObj)).toEqual('#FFFFFF7F')
})
