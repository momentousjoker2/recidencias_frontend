<template>
    <h1 align="center">traspasar Maestros</h1>
    <br />
    <div class="card">
        <div class="card-body">
            <form>
                <div class="custom-control custom-control-inline">
                    <center><button type="button" class="btn btn-primary btn-sm">Traspasar Maestros</button></center>
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
                            <th scope="col">Clave Docente</th>
                            <th scope="col">Nombre del Docente</th>
                            <th scope="col">Departamento</th>
                            <th scope="col">Puesto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="Empleados in info" :key="Empleados.Id_Personal">
                            <td>{{Empleados.Id_Personal}} </td>
                            <td>{{Empleados.Nombre}}</td>
                            <td>{{Empleados.Id_Departamento}}  </td>
                            <td>{{Empleados.Puesto}}  </td>
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
                let url = store.getters.getApiName + "Catalagos/empleados"; //api url
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