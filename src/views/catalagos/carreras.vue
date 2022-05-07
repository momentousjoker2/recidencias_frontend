<template>
<loading v-model:active="isLoading" :can-cancel="false"  :is-full-page="fullPage"/>

    <h1 align="center">Carreras</h1>
    <br />
    <div class="card">
        <div class="card-body">
            <form>
                <table id="table" class="table table-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th >Clave Carrera</th>
                            <th >Nombre Carrera</th>
                            <th >Siglas</th>
                            <th >Departamento</th>
                            <th  v-if="login.user_role === 'Administrador'" > Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="carreras in carreras" :key="carreras.IdCar">
                                <td>{{carreras.idcar}} </td>
                                <td>{{carreras.nombrecar}} </td>
                                <td>{{carreras.siglas}} </td>
                                <td>{{carreras.deptos.NOM_DEPTO}} </td>
                                <td v-if="login.user_role === 'Administrador'" ><button v-on:click="update_local(carreras)" type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal" >Modificar</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modificar Tipo De Proyecto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="control-label" for="email-01">Nombre</label>
                    <input class="form-control" id="email-01" placeholder="Nombre de la carrera" type="text" v-model="data.nombrecar">
                </div>
                <div class="form-group">
                    <label class="control-label" for="password-01">Siglas</label>
                    <input class="form-control" id="password-01" placeholder="Siglas de la carrera" type="password" v-model="data.siglas">
                </div>
                <div class="form-group">
                    <label class="control-label" for="password-01">Departamento</label>
                    <select name="Creditos" class="form-control" v-model="data.deptos.id" required>
                        <option v-for="departamentos in departamentos" :key="departamentos.id_depto" :value="departamentos.id_depto">{{departamentos.nom_depto}}</option>
                    </select>
                </div>
            </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="close">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="update">Modificar</button>
        </div>
        </div>
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
            carreras:null,
            departamentos:null,
            info: null,
            data:{
                idcar:"",
                nombrecar:"",
                siglas:"",
                deptos: {
                    id: "",
                    nombre:""
                },
            },
            login:{
                user_role:sessionStorage.getItem("User_rol"),
            },
            isLoading: false,
            fullPage: true

        }
    },
    created () {
    this.load();
    },
    methods: {

        load: function(event) {
            this.isLoading=true;

            let endpoints = [
                    store.getters.getApiName + "catalagos/carreras/",
                    store.getters.getApiName + "catalagos/departamentos/"
                ];
            axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
                    
                    axios.spread((a, b) => {
                        
                        if(Object.keys(a.data.data).length > 0)
                            this.carreras = a.data.data;
                        
                        if(Object.keys(b.data.data).length > 0)
                            this.departamentos = b.data.data;

                        this.isLoading=false;
                        this.updated();
                    })
                ).catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                });
        },
        update:function(event){
            this.isLoading=true;

            let url = store.getters.getApiName + "catalagos/carreras/";
            let data = new FormData();
                    data.append("idcar", this.data.idcar);
                    data.append("nombrecar", this.data.nombrecar);
                    data.append("siglas", this.data.siglas);                    
                    data.append("idDeptos", this.data.deptos.id);
            axios.post(url,data)
                    .then((res) => {
                        if(res.status==200) {
                            this.isLoading=false;
                            this.load();
                        }
                    });
        },

        update_local: function (datos) {
            this.data.idcar=datos.idcar;
            this.data.nombrecar=datos.nombrecar;
            this.data.siglas=datos.siglas;
            this.data.deptos.id=datos.deptos.id;
            this.data.deptos.nombre=datos.deptos.NOM_DEPTO;

        },
        close: function () {
            this.data.idcar="";
            this.data.nombrecar="";
            this.data.siglas="";
            this.data.deptos.id="";
            this.data.deptos.nombre="";
        },

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
        },
    }

}
</script>

<style>

</style>