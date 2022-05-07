<template>
<loading v-model:active="isLoading" :can-cancel="false"  :is-full-page="fullPage"/>

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
                <table class="table table-sm" id="table">
                    <thead class="thead-dark">
                        <tr>
                            <th >Clave Proyecto</th>
                            <th >Categoria de proyecto</th>
                            <th >Nombre del Proyecto</th>
                            <th >Oficio Autorizada</th>
                            <th >credito</th>
                            <th >horas semanales</th>
                            <th >status</th>
                            <th  v-if="login.user_role === 'Administrador'" > Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="proyectos in this.list.proyectos" :key="proyectos.Id_Actividad">
                                <td>{{proyectos.idactividad}} </td>
                                <td>{{proyectos.categoria.nombre}}</td>
                                <td>{{proyectos.nombres_proyecto}} </td>
                                <td></td>
                                <td>{{proyectos.credito}} </td>
                                <td>{{proyectos.horassemanales}} </td>
                                <td>{{proyectos.estado}} </td>
                                <td v-if="login.user_role === 'Administrador'" ><button v-on:click="update_local(proyectos)" type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal2" >Modificar</button></td>
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
                            <input type="text" id="nombres_proyecto" name="nombres_proyecto"  class="form-control" v-model="data.nombres_proyecto" required>
                        </div> 
                        <div class="form-group">
                            <label>Numero de credito:</label>
                            <input type="number" min="1" max="5" id="credito" name="credito"  class="form-control" v-model="data.credito" required>
                        </div>                   
                    
                        <div class="form-group">
                            <label>Horas Semanales del proyecto:</label>
                            <input type="number" min="1" max="40" id="horassemanales" name="horassemanales"  class="form-control" v-model="data.horassemanales" required>
                        </div>

                        <div class="form-group">
                            <label>Estados:</label>
                            <select name="status" class="custom-select form-control"   v-model="data.estado" v-bind:value="data.status" required> 
                                <option value="ACTIVO" >ACTIVO</option>
                                <option value="INACTIVO">INACTIVO</option>                            
                            </select>
                        </div>

                        <a data-toggle="tab" class="btn btn-primary" href="#tab-02">Siguiente</a>
                    </div>
                    <div class="tab-pane" id="tab-02">
                            <div class="mb-3"> 
                                <label>Tipo de proyecto:</label>
                                <select name="id_TipoProyecto" class="custom-select form-control" v-model="data.categoria" v-bind:value="data.idcategoria" required >
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

<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <div class="custom-control custom-control">
                        <h5>Datos del proyecto:</h5>
                    
                        <label> </label>
                        <h5>id Actividad:</h5>
                        <h5>{{data.idactividad}}</h5>

                        <label> </label>
                        <h5>Nombre del proyecto: </h5>
                        <h5>{{data.nombres_proyecto}}</h5>
                        <label> </label>

                        <h5>categoria: </h5>
                        <h5>{{data.categoria.nombre}}</h5>                                                

                        <label> </label>
                        <h5>Status:</h5>
                        <select name="estado" class="form-control"  v-model="data.estado" v-bind:value="data.estado" required > 
                            <option value="ACTIVO" >Activo</option>
                            <option value="INACTIVO">Inactivo</option>                            
                        </select>
                    </div>
                    <br/>
                </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="resetModel">Close</button>
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
            list: {
                proyectos:{},
                categorias:{},
            },
            info: null,
            info_tipoProyecto: null,
            data:{
                idactividad:"",
                categoria:{
                    id:"",
                    nombre:""
                },
                nombres_proyecto:"",
                OficioAutorizacion:"",
                creditos:"",
                horassemanales:"",
                estado:""
            },
            login:{
                user_role:sessionStorage.getItem("User_rol"),
            },
            isLoading: false,
            fullPage: true,
            
        }
    },
    
    created () {
        this.load();
        
        
    },   
    methods: {
        FilesLoad() {
            this.data.OficioAutorizacion=event.target.files[0];
        },        
        load: function(event) {
                this.isLoading=true;
                
                let endpoints = [
                    store.getters.getApiName + "movimientos/catalagos_proyecto/",
                    store.getters.getApiName + "catalagos/categoria/",
                ];

                axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
                    
                    axios.spread((a, b) => {
                        
                        if(Object.keys(a.data.data).length > 0)
                            this.list.proyectos = a.data.data;
                        
                        if(Object.keys(b.data.data).length > 0)
                            this.list.categorias = b.data.data;

                        
                        this.isLoading=false;
                        this.updated();
                    })
                    
                ).catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                });
        },      
        add: function(event) {           
            let file = this.data.OficioAutorizacion;
            let nombre = this.data.OficioAutorizacion.name;

                let url = store.getters.getApiName + "movimientos/catalagos_proyecto/"; 

                let datos = new FormData();
                    datos.append("idcategoria", this.data.categoria.idcategoria);
                    datos.append("nombres_proyecto", this.data.nombres_proyecto);
                    datos.append("oficioautorizacion",file , nombre);
                    datos.append("credito", this.data.credito);
                    datos.append("horassemanales", this.data.horassemanales);
                    datos.append("estado", this.data.estado);

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


        update_local: function (datos) {
                this.data.idactividad=datos.idactividad,
                this.data.nombres_proyecto=datos.nombres_proyecto,
                this.data.horassemanales=datos.horassemanales,
                this.data.estado=datos.estado,
                this.data.credito=datos.credito,
                this.data.categoria=datos.categoria;
        },

        resetModel:function(event) {
            $('#tab-01').toggleClass('active');        
            $('#tab-03').toggleClass('active');   
            this.data.idactividad="";
            this.data.categoria={};
            this.data.nombres_proyecto="";
            this.data.OficioAutorizacion="";
            this.data.credito="";
            this.data.horassemanales="";
            this.data.estado="";
            },

        update:function(event){
            let url = store.getters.getApiName + "movimientos/catalagos_proyecto/update";
            let data = new FormData();
                    data.append("idactividad", this.data.idactividad);
                    data.append("estado", this.data.estado);
                    
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
        }
    }

}
</script>

<style>

</style>