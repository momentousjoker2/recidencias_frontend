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
                            <th scope="col">Departamentos</th>
                            <th scope="col" v-if="login.user_role === 'Administrador'" > Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="carreras in list.carreras" :key="carreras.IdCar">
                                <th scope="col"></th>
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
                <h5 class="modal-title" id="exampleModalLabel">Modificar tipo de proyecto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="control-label" for="email-01">Nombre:</label>
                    <input class="form-control" id="email-01" placeholder="Nombre de la carrera" type="text" v-model="data.nombrecar">
                </div>
                <div class="form-group">
                    <label class="control-label" for="password-01">Siglas</label>
                    <input class="form-control" id="password-01" placeholder="Siglas de la carrera" type="password" v-model="data.siglas">
                </div>
                <div class="form-group">
                    <label class="control-label" for="password-01">Departamento</label>
                    <select name="Creditos" class="form-control" v-model="data.deptos.id" required>
                        <option v-for="departamentos in list.departamentos" :key="departamentos.id_depto" :value="departamentos.id_depto">{{departamentos.nom_depto}}</option>
                    </select>
                </div>
                {{data}}

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

import axios from "axios";
import store from "@/store";

export default {
    el: 'app',
    data () {
        return {
            list:{
                carreras:null,
                departamentos:null,
            },
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
            }
        }
    },
    created () {
    this.load();
    },
    methods: {
        load: function(event) {
            let url = store.getters.getApiName + "Catalagos/carreras";
                axios.get(url)
                    .then((res) => {
                        this.list.carreras = res.data.data;
                    }).catch((err) => {
                }); 
            url = store.getters.getApiName + "Catalagos/departamentos";
                axios.get(url)
                    .then((res) => {
                        this.list.departamentos = res.data.data;
                    }).catch((err) => {
                });    
        },
        update:function(event){
            let url = store.getters.getApiName + "Catalagos/carreras_update";
            let data = new FormData();
                    data.append("idcar", this.data.idcar);
                    data.append("nombrecar", this.data.nombrecar);
                    data.append("siglas", this.data.siglas);                    
                    data.append("idDeptos", this.data.deptos.id);
            axios.post(url,data)
                    .then((res) => {
                        if(res.status==200) {
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
    }

}
</script>

<style>

</style>