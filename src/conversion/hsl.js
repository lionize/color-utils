import { hslRegex } from '../regex'
import { numberToHex, alphaToHex } from './number'

export const hslStringToHex = input => {
  const match = hslRegex.exec(input)
  let [h, s, l, a] = match.slice(1)

  let [r, g, b] = hslToRgb(h, s, l)

  r = numberToHex(r)
  g = numberToHex(g)
  b = numberToHex(b)

  let string = `#${r}${g}${b}`

  if (a) {
    a = alphaToHex(a)
    string += a
  }

  return string
}

export const hslToRgb = (h, s, l) => {
  h = parseInt(h)
  s = parseInt(s) / 100
  l = parseInt(l) / 100

  const chroma = (1 - Math.abs(2 * l - 1)) * s

  const hPrime = h / 60
  const x = chroma * (1 - Math.abs(hPrime % 2 - 1))

  let r, g, b
  if (hPrime >= 0 && hPrime <= 1) [r, g, b] = [chroma, x, 0]
  else if (hPrime >= 1 && hPrime <= 2) [r, g, b] = [x, chroma, 0]
  else if (hPrime >= 2 && hPrime <= 3) [r, g, b] = [0, chroma, x]
  else if (hPrime >= 3 && hPrime <= 4) [r, g, b] = [0, x, chroma]
  else if (hPrime >= 4 && hPrime <= 5) [r, g, b] = [x, 0, chroma]
  else if (hPrime >= 5 && hPrime < 6) [r, g, b] = [chroma, 0, x]
  else throw Error('hPrime cannot be greater than or equal to 6')

  const m = l - 0.5 * chroma
  return [(r + m) * 255, (g + m) * 255, (b + m) * 255]
}

// const hslaToString = (h, s, l, a) => {
//   let [r, g, b] = hslToRgb(h, s, l)
//
//   let string = `#${h}${s}${l}`
//
//   if (a) {
//     a = alphaToHex(a)
//     string += a
//   }
//
//   return string.toUpperCase()
// }
