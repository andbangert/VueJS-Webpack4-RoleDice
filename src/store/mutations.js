'use strict'

export const FAUCET_BALANCE = 'faucetBalance'
export const CHANGE_BALANCE = 'changeBalance'
export const SET_ROLLED_PERCENT = 'setRolledPercent'
export const SET_HASH_INFO = 'setHashInfo'
export const SET_STATS_INFO = 'setStatsInfo'
export const RESET_STATS_INFO = 'resetStatsInfo'

export const mutations = {
  [FAUCET_BALANCE] (state) {
    state.balance = 100
  },
  [CHANGE_BALANCE] (state, num) {
    if (state.balance > 0) {
      state.balance += num
    }
  },
  [SET_ROLLED_PERCENT] (state, num) {
    state.rolledPercent = num
  },
  [SET_HASH_INFO] (state, hashInfo) {
    state.hashInfo.prevSecretRevealedHash = state.hashInfo.secretRevealedHash
    state.hashInfo.prevSecretServerHash = state.hashInfo.secretServerHash
    state.hashInfo.prevClientSeed = state.hashInfo.clientSeed
    state.hashInfo.secretRevealedHash = hashInfo.secretRevealedHash
    state.hashInfo.secretServerHash = hashInfo.secretServerHash
    state.hashInfo.clientSeed = hashInfo.clientSeed
    state.nonce++
  },
  [SET_STATS_INFO] (state, stats) {
    state.stats.lastResult = stats.success
    if (stats.success) {
      state.stats.success++
    } else {
      state.stats.fail++
    }
    state.stats.count++
    state.stats.successProfit += stats.profit
  },
  [RESET_STATS_INFO] (state, stats) {
    state.stats.lastResult = false
    state.stats.success = 0
    state.stats.fail = 0
    state.stats.count = 0
    state.stats.successProfit = 0
  }
}
