import { createRouter, createWebHashHistory } from 'vue-router'
//Adminstracion
import indexAdmin from "../views/admin/index.vue"
import cambioFormato from "../views/admin/cambioFormato.vue"
import traspasarAlumnos from "../views/admin/tranpasarAlumnos.vue"
import traspasarMaestros from "../views/admin/tranpasarMaestros.vue"
import tranpasarDepartamentos from "../views/admin/tranpasarDepartamentos.vue"
import traspasarCarrera from "../views/admin/tranpasarCarreras.vue"
import tipoProyecto from "../views/admin/tipoProyecto.vue"




//General - Proyectos
import altaProyectos from "../views/general/proyecto/altaProyectos.vue"
import inscripcionEstudiantesProyecto from "../views/general/proyecto/inscripcionEstudiantesProyecto.vue"

//General - consultas
import alumnosProyecto from "../views/general/consultas/alumnosProyecto.vue"
import creditosComplementariosAlumno from "../views/general/consultas/creditosComplementariosAlumno.vue"
import proyectosPeriodo from "../views/general/consultas/proyectosPeriodo.vue"

//General - reportes
import generarConstanciaLiberacion from "../views/general/reportes/generarConstanciaLiberacion.vue"
import generarConstanciasLiberacion from "../views/general/reportes/generarConstanciasLiberacion.vue"

const routes = [{
        path: '/indexAdmin',
        name: 'indexAdmin',
        component: indexAdmin
    },
    {
        path: '/cambioFormato',
        name: 'cambioFormato',
        component: cambioFormato
    },
    {
        path: '/traspasarAlumnos',
        name: 'traspasarAlumnos',
        component: traspasarAlumnos
    },
    {
        path: '/traspasarMaestros',
        name: 'traspasarMaestros',
        component: traspasarMaestros
    },
    {
        path: '/tranpasarDepartamentos',
        name: 'tranpasarDepartamentos',
        component: tranpasarDepartamentos
    },
    {
        path: '/traspasarCarrera',
        name: 'traspasarCarrera',
        component: traspasarCarrera
    },
    {
        path: '/tipoProyecto',
        name: 'tipoProyecto',
        component: tipoProyecto
    },
    {
        path: '/altaProyectos',
        name: 'altaProyectos',
        component: altaProyectos
    },
    {
        path: '/inscripcionEstudiantesProyecto',
        name: 'inscripcionEstudiantesProyecto',
        component: inscripcionEstudiantesProyecto
    },
    {
        path: '/creditosComplementariosAlumno',
        name: 'creditosComplementariosAlumno',
        component: creditosComplementariosAlumno
    },
    {
        path: '/proyectosPeriodo',
        name: 'proyectosPeriodo',
        component: proyectosPeriodo
    },
    {
        path: '/alumnosProyecto',
        name: 'alumnosProyecto',
        component: alumnosProyecto
    },
    {
        path: '/generarConstanciaLiberacion',
        name: 'generarConstanciaLiberacion',
        component: generarConstanciaLiberacion
    },
    {
        path: '/generarConstanciasLiberacion',
        name: 'generarConstanciasLiberacion',
        component: generarConstanciasLiberacion
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router