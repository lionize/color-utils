import htmlColors from './html-colors'

export const isValid = value => {
  if (typeof value == 'string') {
    return validateString(value)
  }

  if (typeof value == 'object') {
    return validateObject(value)
  }

  return false
}

export const isHex = value => typeof value == 'string' && validateHex(value)

export const isRgbObject = value =>
  typeof value == 'object' && validateRgbObject(value)

export const isRgbString = value =>
  typeof value == 'string' && validateRgbString(value)

const validateString = value => {
  if (value.indexOf('#') == 0) {
    return validateHex(value)
  } else {
    return validateColorString(value)
  }
}

const validateObject = value => {
  return validateRgbObject(value) || validateHslObject(value)
}

const validateHex = value => {
  const regex = /^#([a-fA-F0-9]+)$/
  const validCounts = [3, 4, 6, 8]
  let match

  if ((match = regex.exec(value))) {
    return validCounts.includes(match[1].length)
  }
  return false
}

const validateColorString = value => {
  return (
    validateColorName(value) ||
    validateRgbString(value) ||
    validateHslString(value)
  )
}

const validateRgbObject = value => {
  const keySets = [['r', 'g', 'b'], ['r', 'g', 'b', 'a']]

  if (validateObjectKeys(keySets, value)) {
    return validateRgbObjectValues(value)
  }
  return false
}

const validateHslObject = value => {
  const keySets = [['h', 's', 'l'], ['h', 's', 'l', 'a']]

  if (validateObjectKeys(keySets, value)) {
    return validateHslObjectValues(value)
  }
  return false
}

const validateObjectKeys = (validKeySets, value) => {
  const keys = Object.keys(value).sort()

  if (keys.length == 0) return false

  return !!validKeySets.find(keySet => matchingKeys(keySet, keys))
}

const validateRgbObjectValues = ({ r, g, b, a }) => {
  return validateRgbValues([r, g, b], a)
}

const validateHslObjectValues = ({ h, s, l, a }) => {
  return validateHslValues(h, s, l, a)
}

const matchingKeys = (keySet, keys) => {
  if (keys === keySet) return true
  if (keys.length != keySet.length) return false

  keySet.sort()

  for (let [index, key] of keySet.entries()) {
    if (key !== keys[index]) return false
  }
  return true
}

const validateRgbString = value => {
  const match = matchRgb(value)

  if (match) {
    const [r, g, b, a] = match.slice(1)
    if (alphaStringWithoutAlpha(value, 'hsla', a)) return false
    return validateRgbValues([r, g, b], a)
  }
  return false
}

const validateHslString = value => {
  const match = matchHsl(value)

  if (match) {
    const [h, s, l, a] = match.slice(1)
    if (alphaStringWithoutAlpha(value, 'hsla', a)) return false
    return validateHslValues(h, s, l, a)
  }
  return false
}

const validateColorName = value => {
  return Object.keys(htmlColors).includes(value.toLowerCase())
}

const alphaStringWithoutAlpha = (value, string, a) =>
  value.search(string) !== -1 && !a

const matchRgb = value => {
  const rgbRegex = /rgba*\((\d{1,3}), *(\d{1,3}), *(\d{1,3})(?:, *([0,1]{0,1}(?:\.*\d{1,2})*)){0,1}\)/g
  return rgbRegex.exec(value)
}

const validateRgbValues = (colors, alpha) => {
  return colors.every(validateRgbColorValue) && validateAlphaValue(alpha)
}

const validateRgbColorValue = value => value >= 0 && value <= 255

const validateAlphaValue = value => {
  if (value) {
    return value > 0 && value <= 1
  }
  return true
}

const matchHsl = value => {
  const hslRegex = /hsla*\((\d{1,3}), *(\d{1,3}%), *(\d{1,3}%)(?:, *([0,1]{0,1}(?:\.*\d{1,2})*)){0,1}\)/g
  return hslRegex.exec(value)
}

const validateHslValues = (hue, saturation, lightness, alpha) => {
  return (
    validateHslHueValue(hue) &&
    validateHslSaturationOrLightnessValue(saturation) &&
    validateHslSaturationOrLightnessValue(lightness) &&
    validateAlphaValue(alpha)
  )
}

const validateHslHueValue = value => value >= 0 && value <= 360

const validateHslSaturationOrLightnessValue = value => {
  if (value.slice(-1) !== '%') return false

  value = value.slice(0, value.length - 1)
  return value >= 0 && value <= 100
}
