'use strict'

import { NumberUtil } from './numberUtils'
export const MaxPercent = 99.99
class BetUtil {
  static getProfit (betAmount, winChancePercent) {
    let bet = Number(betAmount)
    let per = Number(winChancePercent)
    //
    let rounded = (bet / per)
    let profit = rounded * 100
    return profit
  }
  static getProfitOnWin (betAmount, winChancePercent, revert, exp) {
    let per = Number(winChancePercent)
    let profit = this.getProfit(betAmount, winChancePercent)
    if (revert) {
      per = MaxPercent - per
    }
    let result = (profit * per) / 100
    console.log('BET UTIL')
    result = NumberUtil.round(result, exp)
    return result
  }
  static revertPercent (percent) {
    let per = Number(percent)
    return MaxPercent - per
  }
}

export { BetUtil }
