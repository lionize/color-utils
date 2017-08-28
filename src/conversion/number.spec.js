import { numberToHex } from './number'

describe('numberToHex', () => {
  test('converts 0 to 00', () => {
    expect(numberToHex('0')).toEqual('00')
  })

  test('converts 1 to 01', () => {
    expect(numberToHex('1')).toEqual('01')
  })

  test('converts 255 to ff', () => {
    expect(numberToHex('255')).toEqual('ff')
  })

  test('converts 0.5 to f7', () => {
    expect(numberToHex('0.5')).toEqual('7f')
  })
})
