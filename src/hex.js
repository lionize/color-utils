import { isHex, isRgbString, isRgbObject } from './validation'
import { rgbStringToHex, rgbObjectToHex } from './conversion/rgb'

const hex = input => {
  if (isHex(input)) {
    return input
  }

  if (isRgbString(input)) {
    return rgbStringToHex(input)
  }

  if (isRgbObject(input)) {
    return rgbObjectToHex(input)
  }
}
export default hex
