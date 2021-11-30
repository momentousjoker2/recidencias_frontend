import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

//Login
import login from '@/components/login/login.vue'

//Adminstracion 
import indexAdmin from "@/views/administrador/index.vue"
import cambioFormato from "@/views/administrador/cambioFormato.vue"
import traspasarAlumnos from "@/views/administrador/tranpasarAlumnos.vue"
import traspasarMaestros from "@/views/administrador/tranpasarMaestros.vue"
import tranpasarDepartamentos from "@/views/administrador/tranpasarDepartamentos.vue"
import traspasarCarrera from "@/views/administrador/tranpasarCarreras.vue"
import tipoProyecto from "@/views/administrador/tipoProyecto.vue"
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
import consultarActividadesT from "@/views/alumno/consultas/consultarActividadesT.vue"
import consultarActividadesA from "@/views/alumno/consultas/consultarActividadesA.vue"
import solicitarActividad from "@/views/alumno/solicitud/solicitarActividad.vue"


//General - Proyectos
import altaProyectos from "@/views/general/proyecto/altaProyectos.vue"
import inscripcionEstudiantesProyecto from "@/views/general/proyecto/inscripcionEstudiantesProyecto.vue"

//General - consultas
import alumnosProyecto from "@/views/general/consultas/alumnosProyecto.vue"
import creditosComplementariosAlumno from "@/views/general/consultas/creditosComplementariosAlumno.vue"
import proyectosPeriodo from "@/views/general/consultas/proyectosPeriodo.vue"

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
        path: '/consultarActividadesT',
        name: 'consultarActividadesT',
        component: consultarActividadesT
    },
    {
        path: '/consultarActividadesA',
        name: 'consultarActividadesA',
        component: consultarActividadesA
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