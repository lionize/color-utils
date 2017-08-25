import hexToInt from './hexToInt'

export default (hex) => {
  let r, g, b

  if (hex[0] == '#') {
    hex = hex.slice(1)
  }

  if (hex.length == 6) {
    r = hexToInt(hex.slice(0, 2))
    g = hexToInt(hex.slice(2, 4))
    b = hexToInt(hex.slice(4, 6))
  } else if (hex.length == 3) {
    r = hexToInt(
      `${hex[0]}${hex[0]}`
    )
    g = hexToInt(
      `${hex[1]}${hex[1]}`
    )
    b = hexToInt(
      `${hex[2]}${hex[2]}`
    )
  } else {
    throw Error(`Hex string in format "#FFFFFF" or "#FFF" expected but was ${hex}`)
  }

  return [r, g, b]
}
