import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'
import Alumno from '../views/Alumno.vue'
import addAlumno from '../views/addAlumno.vue'
import Empleado from '../views/Empleado.vue'
import addEmpleado from '../views/addEmpleado.vue'
import Carreras from '../views/Carreras.vue'

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
  {
    path: '/Empleado',
    name: 'Empleado',
    component: Empleado,
  },
  {
    path: '/addEmpleado',
    name: 'addEmpleado',
    component: addEmpleado,
  },
  {
    path: '/Carreras',
    name: 'Carreras',
    component: Carreras,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
