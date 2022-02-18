<template>
    <h1 align="center"> Catalago de proyectos</h1>
    <br />
    <div class="card">
        <div class="card-body">
            <form>
                <div class="custom-control custom-control">
                    <h4 >Regristar Nuevo Proyecto</h4>
                    <button type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal"> Nuevo</button>
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
                            <th scope="col">Clave Proyecto</th>
                            <th scope="col">Tipo de proyecto</th>
                            <th scope="col">Nombre del Proyecto</th>
                            <th scope="col">Oficio Autorizada</th>
                            <th scope="col">Creditos</th>
                            <th scope="col">horas semanales</th>
                            <th scope="col">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="proyectos in info" :key="proyectos.Id_Actividad">
                                <th scope="col"></th>
                                <td>{{proyectos.Id_Actividad}} </td>
                                <td>{{proyectos.id_TipoProyecto}}</td>
                                <td>{{proyectos.Nombre_Proyecto}} </td>
                                <td>{{proyectos.OficioAutorizacion || "vacio"}} </td>
                                <td>{{proyectos.Creditos}} </td>
                                <td>{{proyectos.horassemanales}} </td>
                                <td>{{proyectos.status}} </td>
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
                <h5 class="modal-title" id="exampleModalLabel">Nuevo Proyecto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3 input-group input-group-sm">
                        <label>Nombre del proyecto:</label>
                        <input type="text" id="Nombre_Proyecto" name="Nombre_Proyecto"  class="form-control" v-model="data.Nombre_Proyecto">
                    </div> 
                    <div class="mb-3"> 
                        <label>Tipo de proyecto:</label>
                        <select name="id_TipoProyecto" class="custom-select form-control-sm" v-model="data.id_TipoProyecto" v-bind:value="data.id_TipoProyecto" required>
                            <option v-for="tipo_Proyecto in info_tipoProyecto" :key="tipo_Proyecto.Id_Tipo_Proyecto" :value="tipo_Proyecto.Id_Tipo_Proyecto">{{tipo_Proyecto.Nombre_Tipo_Proyecto}}</option>
                        </select>
                    </div>
                
                    <div class="input-group input-group-sm mb-3"> 
                        <label>Oficio de Autorizacion:</label>
                        <input style="border : none; -webkit-appearance: none ; border-width:0px;" class="form-control-plaintext form-control-sm form-control" id="OficioAutorizacion" name="OficioAutorizacion" type="file" @change="FilesLoad">
                    </div>

                    <div class="input-group input-group-sm mb-3"> 
                        <label>Numero de creditos:</label>
                        <input type="number" min="1" max="5" id="Creditos" name="Creditos"  class="form-control" v-model="data.Creditos">
                    </div>                   
                    
                    <div class="input-group input-group-sm mb-3"> 
                        <label>Horas Semanales del proyecto:</label>
                        <input type="number" min="1" max="40" id="horassemanales" name="horassemanales"  class="form-control" v-model="data.horassemanales">
                    </div>

                    <div class="mb-3"> 
                        <label>Estados:</label>
                        <select name="status" class="custom-select form-control-sm"   v-model="data.status" v-bind:value="data.status" required> 
                            <option value="Activo " >Activo</option>
                            <option value="Inactivo">Inactivo</option>                            
                        </select>
                    </div>

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
{{this.data}}

</template>
<script>

import axios from "axios";
import store from "@/store";

export default {
    el: 'app',
    data () {
        return {
            info: null,
            info_tipoProyecto: null,
            data:{
                id_TipoProyecto:"",
                Nombre_Proyecto:"",
                OficioAutorizacion:"",
                Creditos:"",
                horassemanales:"",
                status:""
            }
            
        }
    },
    created () {
        this.load();
        let url = store.getters.getApiName + "Catalagos/tipo_Proyecto"; 
        axios.get(url)
                    .then((res) => {
                        console.log("RESPONSE RECEIVED: ", res.data.data);
                        this.info_tipoProyecto = res.data.data;
                        console.log("RESPONSE RECEIVED: ", this.info_tipoProyecto);
                    }) .catch((err) => {
                console.log("AXIOS ERROR: ", err);
        }); 
    },   
    methods: {
        FilesLoad() {
            console.log(event.target.files);
        },        
        load: function(event) {
                let url = store.getters.getApiName + "Catalagos/CatalagosProyecto";
                axios.get(url)
                    .then((res) => {
                        this.info = res.data.data;
                    });
        },      
        add: function(event) {
                let url = store.getters.getApiName + "Catalagos/CatalagosProyecto"; 

                let data = new FormData();
                    data.append("Nombre", this.data.nombre);
                    data.append("Status", this.data.status);

                axios.post(url,data)
                    .then((res) => {
                        if(res.status==200) {
                            this.load();
                        }
                    });
        },
        update:function(event){
            let url = store.getters.getApiName + "Catalagos/periodo_update";
            let data = new FormData();
                    data.append("id", this.data.id);
                    data.append("Nombre", this.data.nombre);
                    data.append("Status", this.data.status);
                    
            axios.post(url,data)
                    .then((res) => {
                        console.log(res.data);
                        if(res.status==200) {
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
    }

}
</script>

<style>

</style>