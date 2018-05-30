// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/index'
import App from './App'
import router from './router'
import './scss/_custom.scss'
import { LocalStore } from './utils/localStoreUtil'
import vuelidate from 'vuelidate'
// import VueCookie from 'vue-cookie'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(vuelidate)
// Old
// Used cookie insted of local storage
//
// Vue.use(VueCookie)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  created: function () {
    let that = this
    $(window).on('beforeunload', function () {
      let ls = new LocalStore()
      ls.setState(that.$store.state)
      // let storeStr = JSON.stringify(that.$store.state)
      // that.$cookie.set('endpass_test_state', storeStr)
    })
  }
})
