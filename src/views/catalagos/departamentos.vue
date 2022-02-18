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
                let url = store.getters.getApiName + "Catalagos/departamentos"; 
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