import isValid from './validation'

const color = input => {
  if (isValid(input)) return new Color(input)
  throw Error(`${input} is not a valid color format`)
}
export default color

export class Color {
  constructor(input) {
    this.value = input
  }
}
