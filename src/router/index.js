import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/',
  //   name: 'ScenicFlow',
  //   component: () => import('../views/ScenicFlow.vue')
  // },
  // {
  //   path: '/',
  //   name: 'ScenicFlow2',
  //   component: () => import('../views/ScenicFlow2.vue')
  // },
  // {
  //   path: '/spotwarning',
  //   name: 'SpotWarning',
  //   component: () => import('../views/SpotWarning.vue')
  // },
  // {
  //   path: '/heatmap',
  //   name: 'HeatMap',
  //   component: () => import('../views/HeatMap.vue')
  // },
  {
    path: '/',
    name: 'HeatMap2',
    component: () => import('../views/HeatMap2.vue')
  },
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
