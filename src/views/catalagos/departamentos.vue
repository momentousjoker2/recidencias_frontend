<template>
<loading v-model:active="isLoading" :can-cancel="false"  :is-full-page="fullPage"/>

    <h1 align="center">Departamentos</h1>
    <br/>
    <div class="card">
        <div class="card-body">
            <form>
                <table id="table" class="table table-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Clave Departamento</th>
                            <th scope="col">Nombre Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="Departamento in info" :key="Departamento.id_Departamento">
                            <td>{{Departamento.id_depto}} </td>
                            <td>{{Departamento.nom_depto}}</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import 'vue-loading-overlay/dist/vue-loading.css';

import Loading from 'vue-loading-overlay';
import axios from "axios";
import $ from "jquery";

import store from "@/store";

export default {
    el: 'app',
    components: {
        Loading
    },
    data () {
        return {
            info: null,
            isLoading: false,
            fullPage: true

        }
    },
    created () {
                this.isLoading=true;

                let url = store.getters.getApiName + "catalagos/departamentos/"; 
                axios.get(url)
                    .then((res) => {
                        this.info = res.data.data;
                        this.updated();
                                    this.isLoading=false;

                    }) .catch((err) => {
                    });      
    },
    methods: {
        updated: function () {
            this.$nextTick(function () {
                $('#table').DataTable({
                    'destroy'      :true,
                    'stateSave'   : true,
                    "responsive": true,
                    "language": {
                        "url": "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
                    },
                    "scrollY":        "200px",
                    "scrollCollapse": true,
                    "processing": true,
                    "info":     true,
                    
                }).draw();
            })
        }
    }

}
</script>

<style>

</style>