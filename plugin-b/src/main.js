import Vue from 'vue'
import App from './App'
import router from './router'

import elementNifty from './assets/element-override.css'
Vue.use(elementNifty);

import temaElement from './temaB'
/*import {RenderFildText} from 'plugin-a'
Vue.component("RenderFildText", RenderFildText);*/

/*import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);*/

/*import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)*/

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
