// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {myComponent } from '../index'
Vue.use(myComponent)
Vue.config.productionTip = false
import fullscreen from 'vue-fullscreen'
Vue.use(fullscreen)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
