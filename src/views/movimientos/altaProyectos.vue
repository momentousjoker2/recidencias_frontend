<template>

<loading v-model:active="isLoading" :can-cancel="false"  :is-full-page="fullPage"/>

<h1 align="center"> Proyecos activos</h1>
    <div class="card">
        <div class="card-body">
            <button type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal"> Nuevo</button>
        </div>
    </div>
    <br>
    <br>
<div class="card">
        <div class="card-body">
            <form>
                <table id="table" class="table table-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th >id activida</th>
                            <th >Nombre del proyecto</th>
                            <th >departamento</th>
                            <th >jefe de departamento</th>
                            <th >responsable</th>
                            <th >hora inicio</th>
                            <th >hora fin</th>
                            <th >periodo</th>
                            <th >fecha inicio</th>
                            <th >fecha cierre</th>
                            <th >numero alumnos</th>
                            <th >estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="proyectos in this.list.Alta_Proyectos" :key="proyectos.idactivida">
                                <td>{{proyectos.idActividaActiva}} </td>
                                <td>{{proyectos.nombresproyecto}} </td>
                                <td>{{proyectos.NOM_DEPTO }} </td>
                                <td>{{proyectos.jefe  }} </td>
                                <td>{{proyectos.nom_pers }} </td>
                                <td>{{proyectos.horaInicio}} </td>
                                <td>{{proyectos.horaFin}} </td>
                                <td>{{proyectos.periodo}} </td>
                                <td>{{proyectos.fechaInicio}} </td>
                                <td>{{proyectos.fechaCierre}} </td>
                                <td>{{proyectos.numeroAlumnos}} </td>
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
                        <div class="mb-3"> 
                            <label>Catalago de proyectos:</label>
                                <select name="id_TipoProyecto" class="custom-select form-control-sm" v-model="data.CatalagoProyectos" required >
                                    <option v-for="CatalagoProyectos in this.list.CatalagoProyectos" :key="CatalagoProyectos.idactividad" :value="CatalagoProyectos" >{{CatalagoProyectos.nombres_proyecto}}</option>
                                </select>
                                <br>
                        </div> 
                        <label>Creditos de actividad</label>
                        <p>{{data.CatalagoProyectos.credito}}</p>

                        <label>Horas a la semana de actividad</label>
                        <p>{{data.CatalagoProyectos.horassemanales}}</p>

                        <label>Categoria de actividad</label>                        
                        <p>{{data.CatalagoProyectos.categoria.nombre}}</p>
                        <br>
                        <a data-toggle="tab" class="btn btn-primary" href="#tab-02">Siguiente</a>
                    </div>
                    <div class="tab-pane" id="tab-02">
                        <div class="mb-3"> 
                            <label>Departamento del proyecto:</label>
                                <select name="departamento" class="custom-select form-control-sm" v-model="data.departamento" required @change="selectDeptos(data.departamento)" >
                                    <option v-for="depto in this.list.Deptos" :key="depto.id_depto" :value="depto" >{{depto.nom_depto}}</option>
                                </select>
                                <br>
                        </div>                        
                        <div class="mb-3"> 
                                <label>Encargado del departamento</label>
                                <p>{{this.data.jefedepartamento.nom_pers}}</p>
                        </div> 
                        <div class="mb-3"> 
                                <label>Responsable del proyecto:</label>
                                <select name="PersonalResponsable" class="custom-select form-control-sm" v-model="data.PersonalResponsable" required >
                                    <option v-for="PersonalResponsable in this.list.PersonalResponsable" :key="PersonalResponsable.id_pers" :value="PersonalResponsable" >{{PersonalResponsable.nom_pers}}</option>
                                </select>
                                <br>
                                <label>Puesto</label>
                                <p>{{this.data.PersonalResponsable.puesto}}</p>

                        </div>  
                        <br>   
                        <a data-toggle="tab" class="btn btn-primary" href="#tab-03">Siguiente</a>
                    </div>
                    <div class="tab-pane" id="tab-03">
                        <div class="mb-3"> 
                            <label>Periodo del proyecto :</label>
                            <select name="Periodo" class="custom-select form-control-sm" v-model="data.Periodo" required >
                                <option v-for="Periodo in this.list.Periodo" :key="Periodo.idperiodo" :value="Periodo" >{{Periodo.nombre}}</option>
                            </select>
                            <br>
                            <label>Estado</label>
                            <p>{{this.data.Periodo.status}}</p>
                        </div>  
                        <br>
                        <a data-toggle="tab" class="btn btn-primary" href="#tab-04">Siguiente</a>
                    </div>
                    <div class="tab-pane" id="tab-04">
                        <div class="form-group">
                            <label>fecha de inicio:</label>
                            <input type="date"  id="fechaInicio" name="fechaInicio"  class="form-control" v-model="data.fechaInicio">
                        </div>
                        <div class="form-group">
                            <label>fecha de fin:</label>
                            <input type="date"  id="fechaCierre" name="fechaCierre"  class="form-control" v-model="data.fechaCierre">
                        </div>

                        <div class="form-group">
                            <label>Hora de inicio:</label>
                            <input type="time" id="horaInicio" name="horaInicio"  class="form-control" v-model="data.horaInicio">
                        </div> 
                        <div class="form-group">
                            <label>Hora de finales:</label>
                            <input type="time" id="horaFin" name="horaFin"  class="form-control" v-model="data.horaFin">
                        </div>                   
                        <div class="form-group">
                            <label>Numero de alumnos:</label>
                            <input type="number" id="horaFin" name="horaFin"  class="form-control" v-model="data.numeroAlumnos">
                        </div> 
                        <div class="form-group">
                            <label>Estados:</label>
                            <select name="status" class="custom-select form-control-sm"   v-model="data.estatus" v-bind:value="data.status" required> 
                                <option value="ACTIVO" >ACTIVO</option>
                                <option value="INACTIVO">INACTIVO</option>                            
                            </select>
                        </div>    
                        <a data-toggle="tab" class="btn btn-primary" data-dismiss="modal" v-on:click="add" >Guardar</a>
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
                CatalagoProyectos:{},
                Deptos:{},
                PersonalResponsable:{},
                Periodo:{},
                Alta_Proyectos:{},
            },
            data:{
                CatalagoProyectos:{
                    credito:"",
                    horassemanales:"",
                    categoria:{
                        nombre:""
                    }
                    },
                departamento:{
                    nom_pers:""
                    },
                jefedepartamento:{
                    nom_pers:""
                },
                PersonalResponsable:{
                    puesto:""
                    },
                Periodo:{
                    estado:""
                }
            },
            isLoading: false,
            fullPage: true

        }
    },
    created () {
        this.cargar();
        
    },
    
    methods: {  
        cargar: function(event){
            this.isLoading=true;
                let endpoints = [
                    store.getters.getApiName + "catalagos/empleados/EmpleadosDepartamentales",
                    store.getters.getApiName + "movimientos/catalagos_proyecto/Activos",
                    store.getters.getApiName + "catalagos/periodo/Activas",
                    store.getters.getApiName + "movimientos/proyectos_activos/",
                ];

                axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
                    
                    axios.spread((a, b, c, d) => {
                        
                        if(Object.keys(a.data.data).length > 0)
                            this.list.Deptos = a.data.data;
                        
                        if(Object.keys(b.data.data).length > 0)
                            this.list.CatalagoProyectos = b.data.data;
    
                        if(Object.keys(c.data.data).length > 0)
                            this.list.Periodo = c.data.data;

                        if(Object.keys(d.data.data).length > 0)
                            this.list.Alta_Proyectos = d.data.data;
                        
                        this.isLoading=false;
                        this.updated();
                    })
                    
                ).catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                });

        },   
        add: function(event){
            this.isLoading=true;
            $('#tab-01').toggleClass('active');        
            $('#tab-04').toggleClass('active');   
            
            let url = store.getters.getApiName + "movimientos/proyectos_activos/";
            let data = new FormData();
                    
                    data.append("idCatalagoProyectos", this.data.CatalagoProyectos.idactividad);
                    data.append("idDeptos", this.data.departamento.id_depto);
                    data.append("idJefeDeptos", this.data.departamento.jefedepartamento.id_pers);
                    data.append("idPersonalResponsable", this.data.PersonalResponsable.id_pers);
                    data.append("horaInicio", this.data.horaInicio);
                    data.append("horaFin", this.data.horaFin);
                    data.append("idPeriodo", this.data.Periodo.idperiodo);
                    data.append("fechaInicio", this.data.fechaInicio);
                    data.append("fechaCierre", this.data.fechaCierre);
                    data.append("numeroAlumnos", this.data.numeroAlumnos);
                    data.append("estado", this.data.estatus);

            axios.post(url,data)
                    .then((res) => {
                        console.log(res)
                        if(res.status==200) {
                            this.close();
                            this.isLoading=false;
                            this.cargar();
                        }
                    });



        },

        close: function(event){
            this.data.CatalagoProyectos.credito=""
            this.data.CatalagoProyectos.horassemanales=""
            this.data.CatalagoProyectos.categoria.nombre=""
            this.data.departamento.nom_pers=""
            this.data.PersonalResponsable.puesto=""
            this.data.Periodo.estado=""
    
        },
        selectDeptos: function(depto){
            this.list.PersonalResponsable = depto.empleados,
            this.data.PersonalResponsable.puesto="";
            this.data.jefedepartamento.nom_pers=depto.jefedepartamento.nom_pers
            this.data.departamento.nom_pers=depto.nom_depto
            this.data.departamento.id_depto=depto.id_depto
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
label{ font-size: medium;}

input{ font-size: medium;}

select{ font-size: medium;}

</style>