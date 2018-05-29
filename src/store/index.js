import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'

Vue.use(Vuex)
// State
// Root State
export const state = {
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

export default new Vuex.Store({
  state,
  mutations,
  actions
})
