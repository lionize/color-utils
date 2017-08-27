import color, { Color } from './color'

const colors = [
  'white',
  '#FFFFFF',
  '#fff',
  { r: 255, g: 255, b: 255 },
  'rgb(255, 255, 255)',
  { r: 255, g: 255, b: 255, a: 1 },
  'rgba(255, 255, 255, 1)',
  { h: 0, s: '100%', l: '100%' },
  'hsl(0, 100%, 100%)',
  { h: 0, s: '100%', l: '100%', a: 1 },
  'hsla(0, 100%, 100%, 1)',
]

describe('color', () => {
  test('creates Color objects', () => {
    colors.forEach(c => {
      const obj = color(c)
      expect(obj instanceof Color).toBe(true)
      expect(obj.value).toEqual(c)
    })
  })

  test('throws an error on invalid input', () => {
    const invalid = 'greenpurpleblue'

    expect(() => {
      color(invalid)
    }).toThrow(/not a valid color format/)
  })
})
