import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import store from "@/store";

//Login
import login from '@/components/login/login.vue'

//Index

import index from '@/views/index.vue'

//Catalagos
import alumnos from '@/views/catalagos/alumnos.vue'
import carreras from '@/views/catalagos/carreras.vue'
import catalagoProyecto from '@/views/catalagos/catalagoProyecto.vue'
import departamento from '@/views/catalagos/departamentos.vue'
import maestros from '@/views/catalagos/maestros.vue'
import periodos from '@/views/catalagos/periodos.vue'
import categorias from '@/views/catalagos/categorias.vue'
//import alumnos from ''



const routes = [

    //Login
    {
        path: "/login",
        name: "login",
        component: login,
    },
    //index
    {
        path: "/index",
        name: "index",
        component: index,
    },
    //Categoria
    {
        path: "/alumnos",
        name: "alumnos",
        component: alumnos,
    },
    {
        path: "/carreras",
        name: "carreras",
        component: carreras,
    },
    {
        path: "/catalagoProyecto",
        name: "catalagoProyecto",
        component: catalagoProyecto,
    },
    {
        path: "/departamento",
        name: "departamento",
        component: departamento,
    },
    {
        path: "/maestros",
        name: "maestros",
        component: maestros,
    },
    {
        path: "/periodos",
        name: "periodos",
        component: periodos,
    },
    {
        path: "/categorias",
        name: "categorias",
        component: categorias,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from) => {
    document.title = "Creditos Complementarios"
    if (store.getters.getLogged === false || store.getters.getLogged === null) {
        location.reload();
        return "/login"
    }
})


export default router