export default (hex) => {
  if (hex.length == 2) {
    return parseInt(hex, 16)
  } else {
    throw Error(`Hex string "${hex}" is not valid`)
  }
}
