'use strict'

import { HashUtil } from '../utils/hashutil'
import { BetUtil } from '../utils/betUtil'
import { RESET_STATS_INFO, FAUCET_BALANCE, CHANGE_BALANCE, SET_ROLLED_PERCENT, SET_HASH_INFO, SET_STATS_INFO } from './mutations'

export const actions = {
  faucetBalance ({ commit, state }) {
    if (state.balance === 0) {
      commit(FAUCET_BALANCE)
    }
  },
  changeBalance ({ commit, state }, num) {
    commit(CHANGE_BALANCE, num)
  },
  async makeRoll ({ dispatch, commit, state }, { betAmount, isLow, winChance }) {
    // Check balance
    if (betAmount > state.balance) {
      throw new Error('Insufficient funds')
    }
    // wait for hashes creation
    await dispatch('createHashInfo')
    let percent = HashUtil.getPercent(state.hashInfo.secretServerHash, state.hashInfo.clientSeed, state.hashInfo.nonce)
    commit(SET_ROLLED_PERCENT, percent)
    let betResult = false
    let profit = 0
    if (isLow) {
      // LO
      if (winChance >= percent) {
        betResult = true
        profit = BetUtil.getProfitOnWin(betAmount, winChance, true, 8)
      } else {
        profit = BetUtil.getProfitOnWin(betAmount, winChance, false, 8)
      }
    } else {
      // HI
      let hiPercent = BetUtil.revertPercent(winChance)
      if (hiPercent <= percent) {
        betResult = true
        profit = BetUtil.getProfitOnWin(betAmount, winChance, true, 8)
      } else {
        profit = BetUtil.getProfitOnWin(betAmount, winChance, false, 8)
      }
    }
    commit(CHANGE_BALANCE, { result: betResult, profit: profit })
    commit(SET_STATS_INFO, { success: betResult, profit: profit })
  },
  async createHashInfo ({ commit, state }) {
    // Create hashes
    let hashInfo = {}
    hashInfo.secretRevealedHash = HashUtil.generateUnhashed()
    hashInfo.secretServerHash = HashUtil.hashUnhashed(hashInfo.secretRevealedHash)

    // Check if client seed was set manually
    if (state.hashInfo.clientSeed || state.hashInfo.clientSeed === '') {
      let unhashedClient = HashUtil.generateUnhashed()
      hashInfo.clientSeed = HashUtil.hashUnhashed(unhashedClient)
    } else {
      hashInfo.clientSeed = state.hashInfo.clientSeed
    }
    commit(SET_HASH_INFO, hashInfo)
  },
  resetStats ({ commit }) {
    commit(RESET_STATS_INFO)
  }
}
