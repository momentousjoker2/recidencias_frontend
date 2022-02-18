<template>
    <h1 align="center"> traspasar carreras</h1>
    <br />
    <div class="card">
        <div class="card-body">
            <form>
                <div class="custom-control custom-control-inline">
                    <center><button type="button" class="btn btn-primary btn-sm">Traspasar Carreras</button></center>
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
                            <th scope="col"></th>
                            <th scope="col">Clave Carrera</th>
                            <th scope="col">Nombre Carrera</th>
                            <th scope="col">Siglas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="carreras in info" :key="carreras.IdCar">
                                <th scope="col"></th>
                                <td>{{carreras.id_Carrera}} </td>
                                <td>{{carreras.Nombre_Carrera}} </td>
                                <td>{{carreras.Siglas_Carrera}} </td>
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
                let url = store.getters.getApiName + "Catalagos/carreras";
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