import { hexToRgb } from '.'

export default (hex, alpha) => {
  const [r, g, b] = hexToRgb(hex)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}
