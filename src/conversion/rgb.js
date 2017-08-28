import { rgbRegex } from '../regex'

export const rgbStringToHex = input => {
  const match = rgbRegex.exec(input)
  let [r, g, b, a] = match.slice(1)
  return rgbaToString(r, g, b, a)
}

export const rgbObjectToHex = ({ r, g, b, a }) => rgbaToString(r, g, b, a)

const rgbaToString = (r, g, b, a) => {
  r = parseInt(r).toString(16)
  g = parseInt(g).toString(16)
  b = parseInt(b).toString(16)
  let string = `#${r}${g}${b}`
  if (a) {
    a = (parseFloat(a).toFixed(2) * 255).toString(16).slice(0, 2)
    string += a
    if (a.length == 1) {
      string += a
    }
  }
  return string.toUpperCase()
}
