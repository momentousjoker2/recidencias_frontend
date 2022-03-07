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
                            <th scope="col">Categoria de proyecto</th>
                            <th scope="col">Nombre del Proyecto</th>
                            <th scope="col">Oficio Autorizada</th>
                            <th scope="col">Creditos</th>
                            <th scope="col">horas semanales</th>
                            <th scope="col">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="proyectos in this.list.proyectos" :key="proyectos.Id_Actividad">
                                <th scope="col"></th>
                                <td>{{proyectos.idactividad}} </td>
                                <td>{{proyectos.categoria.nombre}}</td>
                                <td>{{proyectos.nombres_proyecto}} </td>
                                <td>{{proyectos.credito}} </td>
                                <td>{{proyectos.horassemanales}} </td>
                                <td>{{proyectos.estado}} </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">


                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <div class="tab-content">
                    <div class="tab-pane active" id="tab-01">
                        <div class="form-group">
                            <label>Nombre del proyecto:</label>
                            <input type="text" id="Nombre_Proyecto" name="Nombre_Proyecto"  class="form-control" v-model="data.Nombre_Proyecto">
                        </div> 
                        <div class="form-group">
                            <label>Numero de creditos:</label>
                            <input type="number" min="1" max="5" id="Creditos" name="Creditos"  class="form-control" v-model="data.Creditos">
                        </div>                   
                    
                        <div class="form-group">
                            <label>Horas Semanales del proyecto:</label>
                            <input type="number" min="1" max="40" id="horassemanales" name="horassemanales"  class="form-control" v-model="data.horassemanales">
                        </div>

                        <div class="form-group">
                            <label>Estados:</label>
                            <select name="status" class="custom-select form-control-sm"   v-model="data.estatus" v-bind:value="data.status" required> 
                                <option value="ACTIVO" >ACTIVO</option>
                                <option value="INACTIVO">INACTIVO</option>                            
                            </select>
                        </div>

                        <a data-toggle="tab" class="btn btn-primary" href="#tab-02">Siguiente</a>
                    </div>
                    <div class="tab-pane" id="tab-02">
                            <div class="mb-3"> 
                                <label>Tipo de proyecto:</label>
                                <select name="id_TipoProyecto" class="custom-select form-control-sm" v-model="data.categoria" v-bind:value="data.idcategoria" required >
                                    <option v-for="categoria in this.list.categorias" :key="categoria.idcategoria" :value="categoria" >{{categoria.nombre}}</option>
                                </select>
                                <br>
                            </div>                        
                            <div class="mb-3"> 
                                <label>Descripcion</label>
                                <p>{{this.data.categoria.descripcion}}</p>
                            </div>                        
                            <a data-toggle="tab" class="btn btn-primary" href="#tab-03">Siguiente</a>
                    </div>
                    <div class="tab-pane" id="tab-03">
                        <div class="mb-3"> 
                            <label>Oficio de Autorizacion:</label>
                            <input style="border : none; -webkit-appearance: none ; border-width:0px;" class="form-control-plaintext form-control-sm form-control" id="OficioAutorizacion" name="OficioAutorizacion" type="file" @change="FilesLoad">
                        </div>
                        <a data-toggle="tab" class="btn btn-primary" data-dismiss="modal" v-on:click="add" >Siguiente</a>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="close">Close</button>
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
            list: {
                proyectos:{},
                categorias:{},
            },
            info: null,
            info_tipoProyecto: null,
            data:{
                idproyecto:"",
                categoria:{},
                Nombre_Proyecto:"",
                OficioAutorizacion:"",
                Creditos:"",
                horassemanales:"",
                estatus:""
            },
            
        }
    },
    created () {
        this.load();
        
        let url = store.getters.getApiName + "Catalagos/categoria"; 
        axios.get(url)
                    .then((res) => {
                        this.list.categorias = res.data.data;
                    }) .catch((err) => {
                console.log("AXIOS ERROR: ", err);
        }); 
    },   
    methods: {
        FilesLoad() {
            this.data.OficioAutorizacion=event.target.files[0];
        },        
        load: function(event) {
                let url = store.getters.getApiName + "Movimientos/Catalagos_Proyecto";
                axios.get(url)
                    .then((res) => {
                        this.list.proyectos = res.data.data;
                    }).catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                    });
        },      
        add: function(event) {           
            let file = this.data.OficioAutorizacion;
            let nombre = this.data.OficioAutorizacion.name;

                let url = store.getters.getApiName + "Movimientos/Catalagos_Proyecto"; 

                let datos = new FormData();
                    datos.append("idcategoria", this.data.categoria.idcategoria);
                    datos.append("nombres_proyecto", this.data.Nombre_Proyecto);
                    datos.append("oficioautorizacion",file , nombre);
                    datos.append("credito", this.data.Creditos);
                    datos.append("horassemanales", this.data.horassemanales);
                    datos.append("estatus", this.data.estatus);

                axios.post(url,datos)
                    .then((res) => {
                        console.log(res)
                        if(res.status==200) {
                            this.load();
                        }
                    }).catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                    });
                    this.resetModel();
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
                    }).catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                    });
                    this.resetModel();
        },
        update_local: function (datos) {
                this.data.idcategoria=datos.categoria.idcategoria,
                this.data.Nombre_Proyecto= datos.Nombre_Proyecto,
                this.data.Creditos = datos.creditos,
                this.data.horassemanales= datos.horassemanales,
                this.data.estatus = datos.estatus

                console.log(this.data);

        },
        close: function(event) {
            this.data.id="";
            this.data.nombre="";
            this.data.status="";
            this.resetModel();
        },
        resetModel:function(event) {
            $('#tab-01').toggleClass('active');        
            $('#tab-03').toggleClass('active');   
            this.data.idproyecto="";
            this.data.categoria={};
            this.data.Nombre_Proyecto="";
            this.data.OficioAutorizacion="";
            this.data.Creditos="";
            this.data.horassemanales="";
            this.data.estatus="";
            }
    }

}
</script>

<style>

</style>