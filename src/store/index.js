import Vue from 'vue'
import Vuex from 'vuex'
import VueCookie from 'vue-cookie'
import { mutations } from './mutations'
import { actions } from './actions'
import { LocalStore } from '../utils/localStoreUtil'

Vue.use(Vuex)
Vue.use(VueCookie)

// Changed for localStore
// let stateStr = Vue.cookie.get('endpass_test_state')
// let obj = {}
// if (stateStr) {
//   obj = JSON.parse(stateStr)
// } else {
//   obj = {
//     balance: 100.0,
//     rolledPercent: 0.0,
//     hashInfo: {
//       secretRevealedHash: '',
//       secretServerHash: '',
//       clientSeed: '',
//       prevSecretRevealedHash: '',
//       prevSecretServerHash: '',
//       prevClientSeed: '',
//       nonce: 0
//     },
//     stats: {
//       success: 0,
//       fail: 0,
//       count: 0,
//       successProfit: 0,
//       profit: 0,
//       lastResult: false
//     }
//   }
// }

let ls = new LocalStore()
export const state = ls.getState()

export default new Vuex.Store({
  state,
  mutations,
  actions
})
