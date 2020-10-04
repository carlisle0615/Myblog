import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
// import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
