import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'
import Alumno from '../views/Alumno.vue'
import addAlumno from '../views/addAlumno.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/Alumno',
    name: 'Alumno',
    component: Alumno,
  },
  {
    path: '/addAlumno',
    name: 'addAlumno',
    component: addAlumno,
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
