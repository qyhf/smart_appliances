// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Mint from 'mint-ui'
import Vant from 'vant';

import 'vant/lib/index.css';
import 'mint-ui/lib/style.css'


import './assets/common.css'
import './assets/index.css'
import 'lib-flexible/flexible.js'
import './assets/iconfont/iconfont.css'
import './assets/mui/css/mui.min.css'
import 'font-awesome/css/font-awesome.css'
import "./config/rem.js"
import './assets/common.scss'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Mint)
Vue.use(Vant)

window.bus = new Vue();

var store = new Vuex.Store({
	state: {
    bmTab: 1,
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
