<template>
<loading v-model:active="isLoading" :can-cancel="false"  :is-full-page="fullPage"/>

<br/>
    <div class="card">
        <div class="card-body">
            <h4 align="center">Registrar Período</h4>
            <button type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal"> Nuevo Periodo</button>
        </div>
    </div>
    <br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Consultar</h4>
        <table id="table" class="table table-sm">
        <thead class="thead-dark">
            <tr>
                <th >Clave:</th>
                <th >Nombre:</th>
                <th >Status:</th>
                <th  v-if="login.user_role === 'Administrador'" > Modificar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="Periodo in info" :key="Periodo.Id_Periodo">
                
                <td>{{Periodo.idperiodo}} </td>
                <td>{{Periodo.nombre}} </td>
                <td>{{Periodo.status}} </td>
                <td v-if="login.user_role === 'Administrador'" ><button v-on:click="update_local(Periodo)" type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal" >Modificar</button></td>
            </tr>
        </tbody>
    </table>
    </div>
</div> 

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nuevo Período</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="custom-control custom-control-inline">
                        <label>Nombre:</label>
                        <input type="text" id="Nombre" name="Nombre"  class="form-control" v-model="data.nombre">
                    </div>
                    <br/>
                    <br/>
                    <div class="custom-control custom-control-inline">
                        <label>Status:</label>
                        <select name="Creditos"  v-model="data.status" v-bind:value="data.status" required> 
                            <option value="Activo " >Activo</option>
                            <option value="Inactivo">Inactivo</option>                            
                        </select>
                    </div>
                    <br/>
                </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="close">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="add" v-if="data.id==''">Agregar</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="update" v-else>Modificar</button>
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
            info: null,
            data:{
                id:"",
                nombre:"",
                status:"",
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

                let url = store.getters.getApiName + "catalagos/periodo/";
                axios.get(url)
                    .then((res) => {
                        this.info = res.data.data;
                        this.updated();
                                    this.isLoading=false;

                    }).catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                });
        },
        add: function(event) {
                this.isLoading=true;
                let url = store.getters.getApiName + "catalagos/periodo/"; 

                let data = new FormData();
                    data.append("Nombre", this.data.nombre);
                    data.append("Status", this.data.status);

                axios.post(url,data)
                    .then((res) => {
                        if(res.status==200) {
                            this.isLoading=false;
                            this.load();
                        }
                    });
        },
        update:function(event){
            this.isLoading=true;
            let url = store.getters.getApiName + "catalagos/periodo/update/";
            let data = new FormData();
                    data.append("id", this.data.id);
                    data.append("Nombre", this.data.nombre);
                    data.append("Status", this.data.status);
                    
            axios.post(url,data)
                    .then((res) => {
                        console.log(res.data);
                        if(res.status==200) {
                            this.isLoading=false;
                            this.load();
                        }
                    });
        },
        update_local: function (datos) {
            this.data.id=datos.Id_Periodo;
            this.data.nombre=datos.Nombre_Periodo;
            this.data.status=datos.status;
        },
        close: function(event) {
            this.data.id="";
            this.data.nombre="";
            this.data.status="";
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
        }
    }

}
</script>

<style>
label{ font-size: small;}

input{ font-size: small;}

</style>

