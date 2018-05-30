'use strict'

const storeKey = 'endpassState'

class LocalStore {
  constructor () {
    this.state = {
      balance: 100.0,
      rolledPercent: 0.0,
      hashInfo: {
        secretRevealedHash: '',
        secretServerHash: '',
        clientSeed: '',
        prevSecretRevealedHash: '',
        prevSecretServerHash: '',
        prevClientSeed: '',
        nonce: 0
      },
      stats: {
        success: 0,
        fail: 0,
        count: 0,
        successProfit: 0,
        profit: 0,
        lastResult: false
      }
    }
  }
  getState () {
    let stateStr = localStorage.getItem(storeKey)
    if (stateStr) {
      return JSON.parse(stateStr)
    }
    return this.state
  }
  setState (state) {
    if (state) {
      this.state = state
    }
    let stateStr = JSON.stringify(state)
    try {
      localStorage.setItem(storeKey, stateStr)
    } catch (e) {
      // QUOTA_EXCEEDED_ERR
      if (e.code === 22) {
        throw e
      }
    }
  }
}
export { LocalStore }
