import Vue from 'vue'
import App from './App.vue'
//引入mint-ui
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';
Vue.use(Mint);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from '../src/assets/js/router.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
