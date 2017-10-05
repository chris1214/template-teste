// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {meuComponent, meuBotao} from 'plugin-a'
Vue.component("meuComponent", meuComponent);
Vue.component("meuBotao", meuBotao);

import { meuAside, meuHeader, body, detailsShow, input, mySwitch, temaB, Example } from 'plugin-b'
Vue.component("meuAside", meuAside);
Vue.component("meuHeader", meuHeader);
Vue.component("meuHeader", body);
Vue.component("meuHeader", detailsShow);
Vue.component("meuHeader", input);
Vue.component("meuHeader", mySwitch);
Vue.component("meuHeader", Example);
Vue.use(temaB);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
