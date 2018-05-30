import Vue from 'vue'
import Vuex from 'vuex'
import VueCookie from 'vue-cookie'
import { mutations } from './mutations'
import { actions } from './actions'

Vue.use(Vuex)
Vue.use(VueCookie)

let stateStr = Vue.cookie.get('endpass_test_state')
let obj = {}
if (stateStr) {
  obj = JSON.parse(stateStr)
} else {
  obj = {
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

export const state = obj

export default new Vuex.Store({
  state,
  mutations,
  actions
})
