<template>
    <h1 align="center"> traspasar Alumno</h1>
    <br />
    <div class="card">
        <div class="card-body">
                <div class="custom-control custom-control-inline">
                    <center><button type="button" class="btn btn-primary btn-sm">Traspasar Alumnos</button></center>
                </div>    
        </div>
    </div>
    <br/>
    
    <br/>
    <div class="card">
        <div class="card-body">
            <form>
                <table class="table table-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">No. control</th>
                            <th scope="col">Nombre del Alumno</th>
                            <th scope="col">Semestre</th>
                            <th scope="col">Carrera</th>
                            <th scope="col">Actividades</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="Estudiantes in info.full" :key="Estudiantes.ID " >
                            <td>{{Estudiantes.ID}} </td>
                            <td>{{Estudiantes.Nombre }}</td>
                            <td>{{Estudiantes.semestre}}  </td>
                            <td>{{Estudiantes.Carrera}}  </td>
                            <td>{{Estudiantes.Actividades}}  </td>
                            <td>{{Estudiantes.Semestre}}  </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</template>

<script>

import axios from "axios";
import store from "@/store";

export default {
    el: 'app',
    data () {
        return {
            info:{
                full:null,
                filtrar:null,
            },
            data_filter:{
                id:"",
                nombre:"",
                semestre: "",
                carrera: "",
            }
            
        }
    },
    created () {
                let url = store.getters.getApiName + "Catalagos/estudiantes"; 
                axios.get(url)
                    .then((res) => {
                        this.info.full = res.data.data;
                    }) .catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                    });       
    },    
    methods: {
        filtrar: function (event) {
            console.log(this.data_filter.id)
            /* for(let empleados of Object.values(this.info)){
                if(empleados.Id_Departamento==this.data.departamento_selecion.Nombre_Departamento ){
                    if(empleados.Puesto=="JefeDepartamento")
                        ArregloJefeDepartameto.push(empleados);

                    else
                        ArregloEmpleados.push(empleados);
                }
            } */
        }
    }
}

</script>

<style>

</style>