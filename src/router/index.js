import { createRouter, createWebHashHistory } from 'vue-router'
import AprobarSolicitud from '../views/AprobarSolicitud.vue'
import RegistroAlumnos from '../views/RegistroAlumnos.vue'
import EnviarSolicitud from '../views/EnviarSolicitud.vue'
import RegistroActividad from '../views/RegistroActividad.vue'
import tipoProyecto from '../views/TipoProyecto.vue'
import CalificarActividad from '../views/CalificarActividad.vue'
import Consultas from '../views/Consultas.vue'

const routes = [{
        path: '/AprobarSolicitud',
        name: 'AprobarSolicitud',
        component: AprobarSolicitud,
    },
    {
        path: '/RegistroAlumnos',
        name: 'RegistroAlumnos',
        component: RegistroAlumnos,
    },
    {
        path: '/EnviarSolicitud',
        name: 'EnviarSolicitud',
        component: EnviarSolicitud,
    },
    {
        path: '/RegistroActividad',
        name: 'RegistroActividad',
        component: RegistroActividad,
    },
    {
        path: '/tipoProyecto',
        name: 'tipoProyecto',
        component: tipoProyecto,
    },
    {
        path: '/CalificarActividad',
        name: 'CalificarActividad',
        component: CalificarActividad,
    },
    {
        path: '/Consultas',
        name: 'Consultas',
        component: Consultas,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router