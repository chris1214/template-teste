import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/example/Hello'
import login01 from '../example/login/login01.vue'
import login01Scroll from '../example/login/login01-scroll.vue'
import login02 from '../example/login/login02.vue'
import login02Scroll from '../example/login/login02-scroll.vue'
import login03 from '../example/login/login03.vue'
import login03Scroll from '../example/login/login03-scroll.vue'
import login04 from '../example/login/login04.vue'
import templateDefalt from '../example/templateDefalt.vue'
import aside from '../components/aside.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
      path: '/templateDefalt',
      name: 'templateDefalt',
      component: templateDefalt
    },
    {
      path: '/aside',
      name: 'aside',
      component: aside
    }
  ]
})
