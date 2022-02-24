import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/scenicflow',
    name: 'ScenicFlow',
    component: () => import('../views/ScenicFlow.vue')
  },
  {
    path: '/spotwarning',
    name: 'SpotWarning',
    component: () => import('../views/SpotWarning.vue')
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
