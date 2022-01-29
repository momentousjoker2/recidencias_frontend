<template>
    <h1 align="center"> traspasar Alumno</h1>
    <br />
    <div class="card">
        <div class="card-body">
            <form>
                <div class="custom-control custom-control-inline">
                    <center><button type="button" class="btn btn-primary btn-sm">Traspasar Alumnos</button></center>
                </div>    
            </form>
        </div>
    </div>
    <br/>
    <div class="card">
        <div class="card-body">
            <form>
                <table class="table table-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">No. control</th>
                            <th scope="col">Nombre Alumno</th>
                            <th scope="col">Apellido Paterno</th>
                            <th scope="col">Apellido Materno</th>
                            <th scope="col">Semestre</th>
                            <th scope="col">Carrera</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="Estudiantes in info" :key="Estudiantes.Numero_Control">
                            <td>{{Estudiantes.Numero_Control}} </td>
                            <td>{{Estudiantes.Nombre}}</td>
                            <td>{{Estudiantes.Apellido_Paterno}}  </td>
                            <td>{{Estudiantes.Apellido_Materno}}  </td>
                            <td>{{Estudiantes.Semestre}}  </td>
                            <td>{{Estudiantes.Id_Carrera}}  </td>
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
            info: null
        }
    },
    created () {
                let url = store.getters.getApiName + "Catalagos/estudiantes"; //api url
                axios.get(url)
                    .then((res) => {
                        console.log("RESPONSE RECEIVED: ", res.data.data);
                        this.info = res.data.data;
                        console.log("RESPONSE RECEIVED: ", this.info);
                    }) .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            });       // console.log(this.info);
    }

}
</script>

<style>

</style>