import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/felipe-teste',
      name: 'FelipeTeste',
      component: () => import('./components/FelipeTeste.vue')
    },
    {
      path: '/dash-board',
      name: 'DashBoard',
      component: () => import('./views/DashBoard.vue')
    },
    {
      path: '/costumer',
      name: 'Costumer',
      component: () => import('./views/Costumer.vue')
    }
  ]
})
