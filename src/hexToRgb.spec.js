import { hexToRgb } from '.'

describe('hexToRgb', () => {
  test('converts 6-letter hex to rgb', () => {
    const hex = "FFFFFF"
    const result = hexToRgb(hex)
    const expected = [255, 255, 255]

    expect(result).toEqual(expected)
  })

  test('converts 3-letter hex to rgb', () => {
    const hex = 'FFF'
    const result = hexToRgb(hex)
    const expected = [255, 255, 255]

    expect(result).toEqual(expected)
  })

  test('converts 6-letter hex with # to rgb', () => {
    const hex = "#FFFFFF"
    const result = hexToRgb(hex)
    const expected = [255, 255, 255]

    expect(result).toEqual(expected)
  })

  test('converts 3-letter hex with # to rgb', () => {
    const hex = '#FFF'
    const result = hexToRgb(hex)
    const expected = [255, 255, 255]

    expect(result).toEqual(expected)
  })

  test('throws InvalidArgumentError if invalid argument', () => {
    const invalid = '!#$#$AWFEWF'

    expect(() => {
      hexToRgb(invalid)
    }).toThrow()
  })
})
