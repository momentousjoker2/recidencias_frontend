import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
