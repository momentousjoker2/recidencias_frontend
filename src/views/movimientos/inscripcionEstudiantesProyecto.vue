<template>
<loading v-model:active="isLoading" :can-cancel="false"  :is-full-page="fullPage"/>

<h4 align="center">Registrar Alumnos a Actividad</h4>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Actividad</h4>
        <form>

            <label class="control-label" for="password-01">Departamento</label>
            <select name="Creditos" class="form-control" v-model="data.proyecto_forDepto.id" required>
                <option v-for="departamentos in departamentos" :key="departamentos.id_depto" :value="departamentos.id_depto">{{departamentos.nom_depto}}</option>
            </select>
            <div class="custom-control custom-control-inline">
                <label>Nombre:</label>
                <input type="text" id="Nombre" name="Nombre" >
            </div>
            <div class="custom-control custom-control-inline">
                <label>Periodo:</label>
                <input type="text" id="Periodo" name="Periodo">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Encargado:</label>
                <input type="text" id="Encargado" name="Encargado">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Horario:</label>
                <input type="time" id="Horario" name="Horario">
            </div>
            <br/>
            <br/>
            <div class="custom-control custom-control-inline">
                <label>Fecha de inicio:</label>
                <input type="date" id="fechaI" name="fechaI">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Fecha de termino:</label>
                <input type="date" id="fechaF" name="fechaF">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Creditos:</label>
                <select name="Creditos" class="custom-select">
                    <option selected>Creditos</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Estatus:</label>
                <select name="Estatus" class="custom-select">
                    <option selected>-------</option>
                    <option value="1">Estatus 1</option>
                    <option value="2">Estatus 2</option>
                </select>
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Alumno</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>No.Control:</label>
                <input type="text" id="NoControl" name="NoControl">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Nombre:</label>
                <input type="text" id="Nombre" name="Nombre">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Apellido paterno:</label>
                <input type="text" id="apellidoP" name="apellidoP">
            </div>
            <br/>
            <br/>
            <div class="custom-control custom-control-inline">
                <label>Apellido Materno:</label>
                <input type="text" id="apellidoM" name="apellidoM">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Carrera:</label>
                <input type="text" id="Carrera" name="Carrera">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Semestre:</label>
                <input type="text" id="Semestre" name="Semestre">
            </div>
            <br/>
            <br/>
            <div class="custom-control custom-control-inline" >
                <button type="button" class="btn btn-primary btn-sm">Agregar</button>
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Seleccion de Alumnos</h4>
        <table class="table table-sm">
        <thead class="thead-dark">
            <tr>
                <th scope="col"></th>
                <th scope="col">No. de control:</th>
                <th scope="col">Nombre:</th>
                <th scope="col">Apellido Paterno:</th>
                <th scope="col">Apellido Materno:</th>
                <th scope="col">Carrera:</th>
                <th scope="col">Semestre:</th>
                <th scope="col">Seleccionar</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>17290712</td>
                <td>Jessica Jazmin</td>
                <td>Gonzalez</td>
                <td>Romero</td>
                <td>Informatica</td>
                <td>9</td>
                <td>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="Seleccionar" name="Seleccionar">
                        <label class="custom-control-label" for="Seleccionar">Seleccionar</label>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>16290711</td>
                <td>Cristian Emmanuel</td>
                <td>Amezcua</td>
                <td>Moreno</td>
                <td>Informatica</td>
                <td>9</td>
                <td>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="Seleccionar" name="Seleccionar">
                        <label class="custom-control-label" for="Seleccionar">Seleccionar</label>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Alumnos seleccionados</h4>
        <label>No.Alumnos:</label>
        <input type="text" id="noAlumnos" name="noAlumnos" value="1">
        <br/>
        <br/>
        <table class="table table-sm">
            <thead class="thead-dark">
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Jessica Jazmin Gonzalez Romero</td>
                    <td><button type="button" class="btn btn-primary btn-sm">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <center><button type="button" class="btn btn-primary btn-lg">Agregar Alumnos</button></center>
    </div>
</div>
<br/>
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
            login:{
                user_depto:sessionStorage.getItem("User_depto"),
            },
            data:{
                proyecto_forDepto:{}
            },
            isLoading: false,
            fullPage: true,


        }
    },
    created () {
        this.cargar();
    },
    
    methods: {  
        cargar: function(event){
            this.isLoading=true;
            
                let url = store.getters.getApiName + "movimientos/proyectos_activos/forDeptos";
                axios.get(url,{ params: { iddepto: this.login.user_depto } })
                    .then((res) => {
                        this.data.proyecto_forDepto = res.data.data;
                        this.updated();
                                    this.isLoading=false;

                    }).catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                });

                this.isLoading=false;
        },   
        add: function(event){


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

label{ font-size: small;}

input{ font-size: small;}

</style>