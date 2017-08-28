export const numberToHex = number => {
  let result = ''

  if (number > 0 && number < 1) {
    number = (parseFloat(number).toFixed(2) * 255).toString(16).slice(0, 2)

    if (number.length == 1) result += '0'
    result += number
  } else if (number == 0) {
    result = '00'
  } else {
    number = parseInt(number).toString(16)

    if (number.length == 1) result += '0'
    result += number
  }

  return result
}
