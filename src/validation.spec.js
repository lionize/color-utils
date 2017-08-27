import isValid from './validation'

describe('isValid', () => {
  describe('valid', () => {
    const testValid = input =>
      test(`finds "${input}" valid`, () => {
        expect(isValid(input)).toBe(true)
      })

    const valids = [
      '#fff',
      '#ffff',
      '#ffffff',
      '#ffffffff',
      'rgb(255, 255, 255)',
      'rgb(255,255,255)',
      'rgb(255, 255, 255, 1)',
      'rgb(255,255,255,1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255,255,255,1)',
      'rgba(255, 255, 255, 1.0)',
      'rgba(255, 255, 255, 0.5)',
      'rgba(255, 255, 255, 0.25)',
      'rgba(255, 255, 255, .5)',
      { r: 255, g: 255, b: 255 },
      { r: 255, g: 255, b: 255, a: 1 },
      { h: 0, s: '100%', l: '100%' },
      { h: 0, s: '100%', l: '100%', a: 1 },
      'hsl(0, 100%, 100%)',
      'hsl(0, 50%, 50%)',
      'hsl(0, 5%, 5%)',
      'hsl(0,100%,100%)',
      'hsl(0, 100%, 100%, 1)',
      'hsl(0,100%,100%,1)',
      'hsl(0, 50%, 50%, 0.5)',
      'hsla(0, 100%, 100%, 1)',
    ]

    valids.forEach(testValid)
  })

  describe('invalid', () => {
    const testInvalid = input =>
      test(`finds "${input}" invalid`, () => {
        expect(isValid(input)).toBe(false)
      })

    const invalids = [
      'something',
      'some other thing',
      '#ff',
      '#fffff',
      '#ffffffffff',
      'rgb(300, 0, 0)',
      'rgb(0, 300, 0)',
      'rgb(0, 0, 300, no)',
      'rgb(0, 0, 300, 5)',
      'rgba(300, 0, 0)',
      { r: 300, g: 0, b: 0 },
      { r: 0, g: 300, b: 0 },
      { r: 0, g: 0, b: 300 },
      { r: 0, g: 0, b: 300, a: 5 },
      'hsl(500, 0%, 0%)',
      'hsl(0, 150%, 0%)',
      'hsl(0, 0%, 150%)',
      'hsl(0, 0%, 0%, no)',
      'hsl(0, 0%, 0%, 5)',
      'hsl(0, 0, 0%)',
      'hsl(0, 0%, 0)',
      { h: 500, s: '0%', l: '0%' },
      { h: 0, s: '120%', l: '0%' },
      { h: 0, s: '0%', l: '120%' },
      { h: 0, s: '0%', l: '0%', a: 5 },
    ]

    invalids.forEach(testInvalid)
  })
})
