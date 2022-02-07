<template>
    <h1 align="center">Transpatar Departamento</h1>
    <br />
    <div class="card">
        <div class="card-body">
            <form>
                <div class="custom-control custom-control-inline">
                    <center><button type="button" class="btn btn-primary btn-sm">Traspasar Departamentos</button></center>
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
                            <th scope="col">Clave Departamento</th>
                            <th scope="col">Nombre Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="Departamento in info" :key="Departamento.id_Departamento">
                            <td>{{Departamento.id_Departamento}} </td>
                            <td>{{Departamento.Nombre_Departamento}}</td>
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
                let url = store.getters.getApiName + "Catalagos/departamentos"; //api url
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