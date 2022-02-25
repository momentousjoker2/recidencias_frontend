<template>
<br/>
<div>
    <div class="card">
        <div class="card-body">
            <h4 align="center">Registrar categoria de proyecto</h4>
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
            <tr v-for="categoria in list.categoria_full" :key="categoria.idcategoria">
                <th scope="col"></th>
                <td>{{categoria.idcategoria}} </td>
                <td>{{categoria.nombre}} </td>
                <td>{{categoria.descripcion}} </td>
                <td v-if="login.user_role === 'Administrador'" ><button v-on:click="update_local(categoria)" type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal" >Modificar</button></td>
            </tr>
        </tbody>
    </table>
    </div>
</div> 
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                    {{data}}

                <h5 class="modal-title" id="exampleModalLabel" v-if="data.idcategoria == ''">Nuevo tipo de proyecto</h5>
                <h5 class="modal-title" id="exampleModalLabel" v-if="data.idcategoria != ''">Modificar tipo de proyecto</h5>
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
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="add" v-if="data.idcategoria==''">Agregar</button>
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
            list:{
                categoria_full:null,
            },
            data:{
                idcategoria:"",
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
                let url = store.getters.getApiName + "Catalagos/categoria"; 
                axios.get(url)
                    .then((res) => {
                        this.list.categoria_full = res.data.data;
                    });
        },
        add: function(event) {
                let url = store.getters.getApiName + "Catalagos/categoria"; 
                let data = new FormData();
                    data.append("nombre", this.data.nombre);
                    data.append("description", this.data.description);
                axios.post(url,data)
                    .then((res) => {
                        if(res.status==200) {
                            this.load();
                        }
                    });
        },        
        update:function(event){
            let url = store.getters.getApiName + "Catalagos/categoria_update"; 
            let data = new FormData();
                    data.append("id", this.data.idcategoria);
                    data.append("nombre", this.data.nombre);
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
            this.data.idcategoria=datos.idcategoria;
            this.data.nombre=datos.nombre;
            this.data.descripcion=datos.descripcion;

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

