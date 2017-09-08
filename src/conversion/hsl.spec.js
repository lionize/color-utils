import { hslStringToHex, hslToRgb } from './hsl'

test('hslStringToHex', () => {
  const hslString = 'hsl(0, 0%, 100%)'
  expect(hslStringToHex(hslString)).toEqual('#ffffff')
})

test('hslToRgb', () => {
  expect(hslToRgb(0, '0%', '100%')).toEqual([255, 255, 255])
  expect(hslToRgb(0, '0%', '0%')).toEqual([0, 0, 0])
  expect(hslToRgb(0, '100%', '50%')).toEqual([255, 0, 0])
  expect(hslToRgb(120, '100%', '50%')).toEqual([0, 255, 0])
  expect(hslToRgb(240, '100%', '50%')).toEqual([0, 0, 255])
})
