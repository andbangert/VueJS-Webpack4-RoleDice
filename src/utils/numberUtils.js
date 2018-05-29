'use strict'

class NumberUtil {
  static divide (left, right, precision) {
    let num1 = Number(left)
    let num2 = Number(right)
    // check for divide by zero
    if (num2 === 0) {
      throw new Error('divide by zero exception')
    }
    let result = (num1 / num2)

    return result
  }
  static add (left, right) {
    let num1 = Number(left)
    let num2 = Number(right)
    let result = num1 + num2
    return result
  }
  static multiply (left, right) {
    let num1 = Number(left)
    let num2 = Number(right)
    let result = num1 * num2
    return result
  }
  static isInt (n) {
    return Number(n) === n && n % 1 === 0
  }
  static isFloat (n) {
    return Number(n) === n && n % 1 !== 0
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
  static decimalAdjust (type, value, exp) {
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value)
    }
    value = +value
    exp = +exp
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN
    }
    value = value.toString().split('e')
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)))
    value = value.toString().split('e')
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp))
  }
  static decimalRound (value, exp) {
    return this.decimalAdjust('round', value, exp)
  }
  static decimalFloor (value, exp) {
    return this.decimalAdjust('floor', value, exp)
  }
  static decimalCeil (value, exp) {
    return this.decimalAdjust('ceil', value, exp)
  }
}

export { NumberUtil }
