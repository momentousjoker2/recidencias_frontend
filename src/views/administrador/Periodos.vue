<template>
<br/>
{{info}}
{{data}}
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Consulta</h4>
        <table class="table table-sm">
        <thead class="thead-dark">
            <tr>
                <th scope="col"></th>
                <th scope="col">ID:</th>
                <th scope="col">Nombre:</th>
                <th scope="col">Status:</th>
                <th scope="col" v-if="login.user_role === 'Administrador'" > Modificar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="Periodo in info" :key="Periodo.Id_Periodo">
                
                <th scope="col"></th>
                <td>{{Periodo.Id_Periodo}} </td>
                <td>{{Periodo.Nombre_Periodo}} </td>
                <td>{{Periodo.status}} </td>
                <td v-if="login.user_role === 'Administrador'" ><button v-on:click="Modificar(Periodo)" type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal" >Modificar</button></td>
            </tr>
        </tbody>
    </table>
    </div>
</div> 
<div>
    <div class="card">
        <div class="card-body">
            <h4 align="center">Registrar Periodo</h4>
            <button type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal"> Nuevo</button>
        </div>
    </div>
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nuevo Periodo</h5>
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
                status:"",
            },
            login:{
                user_role:sessionStorage.getItem("User_rol"),
            }
        }
    },
    created () {
            this.carga();
    },  
    methods: {
        add: function(event) {
                let url = store.getters.getApiName + "Catalagos/periodo"; //api url

                let data = new FormData();
                    data.append("Nombre", this.data.nombre);
                    data.append("Status", this.data.status);

                axios.post(url,data)
                    .then((res) => {
                        if(res.status==200) {
                            this.carga();
                        }
                    });
        },
        close: function(event) {
            this.data.id="";
            this.data.nombre="";
            this.data.status="";

        },
        carga: function(event) {
                let url = store.getters.getApiName + "Catalagos/periodo"; //api url
                axios.get(url)
                    .then((res) => {
                        this.info = res.data.data;
                    });
        },
        Modificar: function (datos) {
            this.data.id=datos.Id_Periodo;
            this.data.nombre=datos.Nombre_Periodo;
            this.data.status=datos.status;
        },
        update:function(event){
            let url = store.getters.getApiName + "Catalagos/periodo_update"; //api url
            let data = new FormData();
                    data.append("id", this.data.id);
                    data.append("Nombre", this.data.nombre);
                    data.append("Status", this.data.status);
                    
            axios.post(url,data)
                    .then((res) => {
                        console.log(res.data);
                        if(res.status==200) {
                            this.carga();
                        }
                    });
        }
    }

}
</script>

<style>
label{ font-size: small;}

input{ font-size: small;}

</style>

