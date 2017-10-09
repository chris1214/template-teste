// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import pluginA from 'plugin-a'
// Vue.component("meuComponent", meuComponent);
// Vue.component("meuBotao", meuBotao);

import { meuAside, meuHeader, meuBody, detailsShow, meuInput, mySwitch, Example, } from 'plugin-b'
Vue.component("meuAside", meuAside);
Vue.component("meuHeader", meuHeader);
Vue.component("meuBody", meuBody);
Vue.component("detailsShow", detailsShow);
Vue.component("meuInput", meuInput);
Vue.component("mySwitch", mySwitch);
Vue.component("Example", Example);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
