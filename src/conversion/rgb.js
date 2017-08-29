import { rgbRegex } from '../regex'
import { numberToHex, alphaToHex } from './number'

export const rgbStringToHex = input => {
  const match = rgbRegex.exec(input)
  let [r, g, b, a] = match.slice(1)
  return rgbaToString(r, g, b, a)
}

export const rgbObjectToHex = ({ r, g, b, a }) => rgbaToString(r, g, b, a)

const rgbaToString = (r, g, b, a) => {
  r = numberToHex(r)
  g = numberToHex(g)
  b = numberToHex(b)

  let string = `#${r}${g}${b}`

  if (a) {
    a = alphaToHex(a)
    string += a
  }

  return string.toUpperCase()
}
