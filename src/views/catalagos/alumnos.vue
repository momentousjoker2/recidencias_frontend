<template>
<loading v-model:active="isLoading" :can-cancel="false"  :is-full-page="fullPage"/>

    <h1 align="center">Alumnos</h1>

    <br/>
    <div class="card">
        <div class="card-body">
            <form>
                <table class="table" id="table">
                    <thead >
                        <tr>
                            <th >No. Control</th>
                            <th >Nombre Del Alumno</th>
                            <th >Semestre</th>
                            <th >Carrera</th>
                            <th >Actividades</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="estudiantes in alumnos" :key="estudiantes.ID " >
                            <td>{{ estudiantes.ID }}</td>
                            <td>{{ estudiantes.Nombre }}</td>
                            <td>{{ estudiantes.semestre }}</td>
                            <td>{{ estudiantes.Carrera }}</td>
                            <td><button v-on:click="mostrar(estudiantes)" type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal" >Mostrar</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th >No. Control</th>
                            <th >Nombre Del Alumno</th>
                            <th >Semestre</th>
                            <th >Carrera</th>
                            <th ></th>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </div>
    </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Numero de actividades por alumno</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <table class="table table-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Categoria</th>
                            <th scope="col">Actividades realizadas</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="Actividades in info.datosM.categorias" :key="Actividades " >
                            <td>{{Actividades.Nombre}} </td>
                            <td>{{Actividades.Contador }}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            
            
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
            alumnos: [],

            info:{
                full:null,
                datosM:{
                    Nombre:"",
                    Contador: "",
                }
            },
            isLoading: false,
            fullPage: true

        }
    },
    store: store,
    created () {
        this.load();
    
    },    
    methods: {
        mostrar:function(datos){
            this.info.datosM=datos;
        },
        close:function(event){
            this.info.datosM=null;
        },
        updated: function () {
            this.$nextTick(function () {
                $('#table').DataTable({
                    'destroy'      :true,
                    'stateSave'   : false,
                    "responsive": true,
                    "language": {
                        "url": "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
                    },
                    "scrollY":        "200px",
                    "scrollCollapse": true,
                    "processing": true,
                    "info":     true,
                    initComplete: function () {
                        this.api().columns().every( function () {
                            var column = this;
                            var select = $('<select><option value=""></option></select>')
                                .appendTo( $(column.footer()).empty() )
                                .on( 'change', function () {
                                    var val = $.fn.dataTable.util.escapeRegex(
                                        $(this).val()
                                    );

                            column
                                .search( val ? '^'+val+'$' : '', true, false )
                                .draw();
                            } );
                            column.data().unique().sort().each( function ( d, j ) {
                                select.append( '<option value="'+d+'">'+d+'</option>' )
                            } );
                        });
                    }
                }).draw();
        })
        },
        load: function () {
                this.isLoading=true;
                let url = store.getters.getApiName + "catalagos/alumnos/"; 
                let data = axios.get(url).then((res) => {
                    this.alumnos = res.data.data;                 
                    this.updated();
                    this.isLoading=false;
                }).catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                });      
        }
    }
}

</script>

<style>

</style>