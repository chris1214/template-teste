// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {myAside, myHeader, myBody} from 'element-2'
Vue.component("myAside", myAside);
Vue.component("myHeader", myHeader);
Vue.component("myBody", myBody);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, myAside, myHeader,  myBody}
})
