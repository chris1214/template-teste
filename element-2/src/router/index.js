import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/example/HelloWorld.vue'
import aside from '@/components/myAside'
import myLogin from '@/components/myLogin'
import myCreatUser from '@/components/myCreatUser'
import myForgotPassword from '@/components/myForgotPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/aside',
      name: 'aside',
      component: aside
    },
    {
      path: '/',
      name: 'myLogin',
      component: myLogin
    },
    {
      path: '/creat',
      name: 'myCreatUser',
      component: myCreatUser
    },
    {
      path: '/forgotPassword',
      name: 'myForgotPassword',
      component: myForgotPassword
    }
  ]
})
