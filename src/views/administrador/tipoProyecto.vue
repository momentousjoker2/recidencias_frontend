<template>
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
            </tr>
        </thead>
        <tbody>
            <tr v-for="Tipo_Proyecto in info" :key="Tipo_Proyecto.IdTipoProyecto">
                <th scope="col"></th>
                <td>{{Tipo_Proyecto.Id_Tipo_Proyecto}} </td>
                <td>{{Tipo_Proyecto.Nombre_Tipo_Proyecto}} </td>
                <td>{{Tipo_Proyecto.Descripcion}} </td>
            </tr>
        </tbody>
    </table>
    </div>
</div> 
<div>
    <div class="card">
        <div class="card-body">
            <h4 align="center">Registrar Tipo de Proyecto</h4>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"> Nuevo</button>
        </div>
    </div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nuevo tipo de proyecto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="custom-control custom-control-inline">
                        <label>Nombre:</label>
                        <input type="text" id="Nombre" name="Nombre" v-model="tipo_Proyecto">
                    </div>
                    <div class="custom-control custom-control-inline">
                        <label>Descripcion:</label>
                        <input type="text" id="descripcion" name="descripcion" v-model="descripcion">
                    </div>
                    <br/>
                    <br/>
                </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="close">Close</button>
            <button type="button" class="btn btn-primary"  v-on:click="add">Agregar</button>
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
            tipo_Proyecto : "",
            descripcion : ""
        }
    },
    created () {
            this.carga();
    },  
    methods: {
        add: function(event) {
                let url = store.getters.getApiName + "Catalagos/tipo_Proyecto"; //api url

                let data = new FormData();
                    data.append("tipo_Proyecto", this.tipo_Proyecto);
                    data.append("description", this.descripcion);

                axios.post(url,data)
                    .then((res) => {
                        if(res.status==200) {
                            this.carga();
                        }
                    });
        },
        close: function(event) {
            this.tipo_Proyecto="";
            this.descripcion="";
        },
        carga: function(event) {
                let url = store.getters.getApiName + "Catalagos/tipo_Proyecto"; //api url
                axios.get(url)
                    .then((res) => {
                        this.info = res.data.data;
                    });
        }
    }

}
</script>

<style>
label{ font-size: small;}

input{ font-size: small;}

</style>

