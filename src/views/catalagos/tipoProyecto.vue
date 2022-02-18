<template>
<br/>
<div>
    <div class="card">
        <div class="card-body">
            <h4 align="center">Registrar Tipo de Proyecto</h4>
            <button type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal"> Nuevo</button>
        </div>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Consulta</h4>
        <table class="table table-sm">
        <thead class="thead-dark">
            <tr>
                <th scope="col"></th>
                <th scope="col">ID:</th>
                <th scope="col">Nombre:</th>
                <th scope="col">Descripcion:</th>
                <th scope="col" v-if="login.user_role === 'Administrador'" > Modificar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="Tipo_Proyecto in info" :key="Tipo_Proyecto.IdTipoProyecto">
                <th scope="col"></th>
                <td>{{Tipo_Proyecto.Id_Tipo_Proyecto}} </td>
                <td>{{Tipo_Proyecto.Nombre_Tipo_Proyecto}} </td>
                <td>{{Tipo_Proyecto.Descripcion}} </td>
                <td v-if="login.user_role === 'Administrador'" ><button v-on:click="update_local(Tipo_Proyecto)" type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal" >Modificar</button></td>
            </tr>
        </tbody>
    </table>
    </div>
</div> 
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel" v-if="data.id == ''">Nuevo tipo de proyecto</h5>
                <h5 class="modal-title" id="exampleModalLabel" v-if="data.id != ''">Modificar tipo de proyecto</h5>
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
                    <div class="custom-control custom-control-inline">
                        <label>Descripcion:</label>
                        <input type="text" id="descripcion" name="descripcion"  class="form-control" v-model="data.descripcion">
                    </div>
                    <br/>
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
import axios from "axios";
import store from "@/store";

export default {
    el: 'app',
    data () {
        return {
            info: null,
            data:{
                id:"",
                nombre:"",
                descripcion:"",
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
                let url = store.getters.getApiName + "Catalagos/tipo_Proyecto"; 
                axios.get(url)
                    .then((res) => {
                        this.info = res.data.data;
                    });
        },
        add: function(event) {
                let url = store.getters.getApiName + "Catalagos/tipo_Proyecto"; 
                let data = new FormData();
                    data.append("tipo_Proyecto", this.data.nombre);
                    data.append("description", this.data.descripcion);
                axios.post(url,data)
                    .then((res) => {
                        if(res.status==200) {
                            this.load();
                        }
                    });
        },        
        update:function(event){
            let url = store.getters.getApiName + "Catalagos/tipo_Proyecto_update"; 
            let data = new FormData();
                    data.append("id", this.data.id);
                    data.append("tipo_Proyecto", this.data.nombre);
                    data.append("description", this.data.descripcion);
                    
            axios.post(url,data)
                    .then((res) => {
                        console.log(res.data);
                        if(res.status==200) {
                            this.load();
                        }
                    });
        },        
        update_local: function (datos) {
            this.data.id=datos.Id_Tipo_Proyecto;
            this.data.nombre=datos.Nombre_Tipo_Proyecto;
            this.data.descripcion=datos.Descripcion;
        },
        close: function(event) {
            this.data.id="";
            this.data.nombre="";
            this.data.descripcion="";
        },
    }
}
</script>

<style>
label{ font-size: small;}

input{ font-size: small;}

</style>

