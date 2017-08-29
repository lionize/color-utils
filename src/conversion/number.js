export const numberToHex = number => {
  let result = ''

  if (number == 0) {
    result = '00'
  } else {
    number = parseInt(number).toString(16)

    if (number.length == 1) result += '0'
    result += number
  }

  return result
}

export const alphaToHex = alpha => {
  let result = ''

  alpha = (parseFloat(alpha).toFixed(2) * 255).toString(16).slice(0, 2)

  if (alpha.length == 1) result += '0'
  result += alpha

  return result
}
