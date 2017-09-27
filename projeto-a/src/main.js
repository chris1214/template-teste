// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {meuComponent, meuBotao} from 'plugin-a'
Vue.component("meuComponent", meuComponent);
Vue.component("meuBotao", meuBotao);

import {componentB} from 'plugin-b'
Vue.component("componentB", componentB);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
