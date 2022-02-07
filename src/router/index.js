import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

//Login
import login from '@/components/login/login.vue'
import menu from "@/components/menu/menu.vue"

//Adminstracion 
import indexAdmin from "@/views/administrador/index.vue"
import cambioFormato from "@/views/administrador/cambioFormato.vue"
import Alumnos from "@/views/administrador/Alumnos.vue"
import Maestros from "@/views/administrador/Maestros.vue"
import Departamentos from "@/views/administrador/Departamentos.vue"
import Carrera from "@/views/administrador/Carreras.vue"
import tipoProyecto from "@/views/administrador/tipoProyecto.vue"
import periodos from "@/views/administrador/Periodos.vue"
import SituacionEspecial from "@/views/administrador/SituacionEspecial.vue"

//Jefe de departamento
import indexJefeDep from "@/views/jefeDepartamento/index.vue"

//Coordinadores
import indexCoordinadores from "@/views/coordinadores/index.vue"
import calificarAlumnos from "@/views/coordinadores/Proyecto/calificarAlumnos.vue"

//Ventanilla de servicios escolares
import indexVentanilla from "@/views/jefeDepartamento/index.vue"


//Alumnos
import indexAlumno from "@/views/alumno/index.vue"
import consultarActividadesAT from "@/views/alumno/consultas/consultarActividadesAT.vue"
import solicitarActividad from "@/views/alumno/solicitud/solicitarActividad.vue"


//General - Proyectos
import altaProyectos from "@/views/general/proyecto/altaProyectos.vue"
import inscripcionEstudiantesProyecto from "@/views/general/proyecto/inscripcionEstudiantesProyecto.vue"

//General - consultas
import alumnosProyecto from "@/views/general/consultas/alumnosProyecto.vue"
import creditosComplementariosAlumno from "@/views/general/consultas/creditosComplementariosAlumno.vue"
import proyectosPeriodo from "@/views/general/consultas/proyectosPeriodo.vue"
import actividadesActivas from "@/views/general/consultas/proyectoActivos.vue"

//General - reportes
import generarConstanciaLiberacion from "@/views/general/reportes/generarConstanciaLiberacion.vue"
import generarConstanciasLiberacion from "@/views/general/reportes/generarConstanciasLiberacion.vue"

const routes = [
    //Login
    {
        path: "/login",
        name: "login",
        component: login
    },
    {
        path: "/menu",
        name: "menu",
        component: menu
    },
    //Index
    {
        path: "/indexAdmin",
        name: "indexAdmin",
        component: indexAdmin
    }, {
        path: "/indexJefeDep",
        name: "indexJefeDep",
        component: indexJefeDep
    }, {
        path: "/indexCoordinadores",
        name: "indexCoordinadores",
        component: indexCoordinadores
    }, {
        path: "/indexVentanilla",
        name: "indexVentanilla",
        component: indexVentanilla
    }, {
        path: "/indexAlumno",
        name: "indexAlumno",
        component: indexAlumno
    },
    //Administradores
    {
        path: '/SituacionEspecial',
        name: 'SituacionEspecial',
        component: SituacionEspecial
    },
    {
        path: '/cambioFormato',
        name: 'cambioFormato',
        component: cambioFormato
    },
    {
        path: '/Alumnos',
        name: 'Alumnos',
        component: Alumnos
    },
    {
        path: '/Maestros',
        name: 'Maestros',
        component: Maestros
    },
    {
        path: '/Departamentos',
        name: 'Departamentos',
        component: Departamentos
    },
    {
        path: '/Carrera',
        name: 'Carrera',
        component: Carrera
    },
    {
        path: '/tipoProyecto',
        name: 'tipoProyecto',
        component: tipoProyecto
    },
    {
        path: '/periodos',
        name: 'periodos',
        component: periodos
    },
    //Jefe de departamento

    //Cordinadores
    {
        path: '/calificarAlumnos',
        name: 'calificarAlumnos',
        component: calificarAlumnos
    },
    //Ventanilla de servicios escolares

    //Alumnos
    {
        path: '/consultarActividadesAT',
        name: 'consultarActividadesAT',
        component: consultarActividadesAT
    },
    {
        path: '/solicitarActividad',
        name: 'solicitarActividad',
        component: solicitarActividad
    },

    //General - Proyectos
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

    //General - consultas
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
        path: '/ActividadesActivas',
        name: 'ActividadesActivas',
        component: actividadesActivas
    },

    //General - reportes
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