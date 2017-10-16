import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/example/HelloWorld.vue'
import aside from '@/components/aside'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/aside',
      name: 'aside',
      component: aside
    }
  ]
})
