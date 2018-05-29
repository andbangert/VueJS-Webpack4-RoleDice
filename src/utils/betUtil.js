'use strict'

import { NumberUtil } from './numberUtils'
export const MaxPercent = 99.99
class BetUtil {
  static getProfit (betAmount, winChancePercent) {
    let bet = Number(betAmount)
    let per = Number(winChancePercent)
    //
    let rounded = NumberUtil.decimalRound((bet / per), -8)
    console.log(rounded)
    let profit = rounded * 100
    return profit
  }
  static getProfitOnWin (betAmount, winChancePercent, revert) {
    let per = Number(winChancePercent)
    let profit = this.getProfit(betAmount, winChancePercent)
    if (revert) {
      per = MaxPercent - per
    }
    let result = NumberUtil.decimalRound(profit * per, -8) / 100
    return result
  }
  static revertPercent (percent) {
    let per = Number(percent)
    return MaxPercent - per
  }
}

export { BetUtil }
