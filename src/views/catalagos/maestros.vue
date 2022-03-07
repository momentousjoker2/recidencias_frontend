<template>
    <h1 align="center">Traspasar Maestros</h1>
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
                            <th scope="col">Nombre Del Docente</th>
                            <th scope="col">Departamento</th>
                            <th scope="col">Puesto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="Empleados in info" :key="Empleados.Id_Personal">
                            <td>{{Empleados.id_pers}} </td>
                            <td>{{Empleados.nom_pers}}</td>
                            <td>{{Empleados.id_depto}}  </td>
                            <td>{{Empleados.puesto}}  </td>
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
                let url = store.getters.getApiName + "Catalagos/empleados"; 
                axios.get(url)
                    .then((res) => {
                        this.info = res.data.data;
                    }) .catch((err) => {
                    });     
    }

}
</script>

<style>

</style>