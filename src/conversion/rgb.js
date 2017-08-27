import { rgbRegex } from '../regex'

export const rgbStringToHex = input => {
  const match = rgbRegex.exec(input)
  let [r, g, b, a] = match.slice(1)
  r = parseInt(r).toString(16)
  g = parseInt(g).toString(16)
  b = parseInt(b).toString(16)
  let string = `#${r}${g}${b}`
  if (a) {
    a = parseInt(a * 255).toString(16)
    string += a
    if (a.length == 1) {
      string += a
    }
  }
  return string.toUpperCase()
}
