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
})
