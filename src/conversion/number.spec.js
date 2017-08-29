import { numberToHex, alphaToHex } from './number'

describe('numberToHex', () => {
  test('converts 000 to 00', () => {
    expect(numberToHex('000')).toEqual('00')
  })

  test('converts 001 to 01', () => {
    expect(numberToHex('001')).toEqual('01')
  })

  test('converts 255 to ff', () => {
    expect(numberToHex('255')).toEqual('ff')
  })
})

describe('alphaToHex', () => {
  test('converts 0.0 to 00', () => {
    expect(alphaToHex('0.0')).toEqual('00')
  })

  test('converts 1.0 to ff', () => {
    expect(alphaToHex('1.0')).toEqual('ff')
  })
})
