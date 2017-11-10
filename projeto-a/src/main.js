// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import pluginA from 'plugin-a'
// Vue.component("myComponent", myComponent);
// Vue.component("myBotao", myBotao);

import myComponetn from 'element-2'
Vue.use(myComponetn)

/*import { myAside, mayHeader, myBody, detailsShow, myInput, mySwitch, Example, } from 'plugin-b'
Vue.component("myAside", myAside);
Vue.component("myHeader", myHeader);
Vue.component("myBody", myBody);
Vue.component("detailsShow", detailsShow);
Vue.component("myInput", myInput);
Vue.component("mySwitch", mySwitch);
Vue.component("Example", Example);*/

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, }
})
