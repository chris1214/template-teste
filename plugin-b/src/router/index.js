import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import example from '../components/Example.vue'
import login01 from '../components/login01.vue'
import login01Scroll from '../components/login01-scroll.vue'
import login02 from '../components/login02.vue'
import login02Scroll from '../components/login02-scroll.vue'
import login03 from '../components/login03.vue'
import login03Scroll from '../components/login03-scroll.vue'
import login04 from '../components/login04.vue'
import login05 from '../components/login05.vue'
import aside from '../components/header/aside.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
    {
      path: '/login01',
      name: 'login01',
      component: login01
    },
    {
      path: '/login02',
      name: 'login02',
      component: login02
    },
    {
      path: '/login03',
      name: 'login03',
      component: login03
    },
    {
      path: '/login01Scroll',
      name: 'login01Scroll',
      component: login01Scroll
    },
    {
      path: '/login02Scroll',
      name: 'login02Scroll',
      component: login02Scroll
    },
    {
      path: '/login03Scroll',
      name: 'login03Scroll',
      component: login03Scroll
    },
    {
      path: '/login04',
      name: 'login04',
      component: login04
    },
    {
      path: '/login05',
      name: 'login05',
      component: login05
    },
    {
      path: '/aside',
      name: 'aside',
      component: aside
    }
  ]
})
