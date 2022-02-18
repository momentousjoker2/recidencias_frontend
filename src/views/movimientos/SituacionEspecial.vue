<template>
<br/>
<div class="card">
    <div class="card-body">
        <form>
            <div class="custom-control custom-control-inline">
                <label>No.Control:</label>
                <input type="text" id="noControl" name="noControl" v-model="filtro.noControl">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Nombre:</label>
                <input type="text" id="nombre" name="nombre" v-model="filtro.nombre">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Apellido paterno:</label>
                <input type="text" id="ApellidoP" name="ApellidoP" v-model="filtro.ApellidoP">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Apellido Materno:</label>
                <input type="text" id="ApellidoM" name="ApellidoM" v-model="filtro.ApellidoM">
            </div>
            <br/>
            <br/>
            <div class="custom-control custom-control-inline">
                <label>Semestre:</label>
                <input type="text" id="semestre" name="semestre" v-model="filtro.semestre">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Carrera:</label>
                <input type="text" id="Carrera" name="Carrera" v-model="filtro.carrera">
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Ordenar por</h4>
        <form>
            <div class="form-check-inline">
                <label class="form-check-label">
                <input type="radio" class="form-check-input" name="noControl">No. Control</label>
            </div>
            <div class="form-check-inline">
                <label class="form-check-label">
                <input type="radio" class="form-check-input" name="Alfabetico">Nombre Alfabetico</label>
            </div>
            <div class="form-check-inline">
                <label class="form-check-label">
                <input type="radio" class="form-check-input" name="CarNom">Carrera y Nombre</label>
            </div>
            <br/>
            <br/>
            <div class="form-check-inline">
                <label class="form-check-label">
                <input type="radio" class="form-check-input" name="SemNom">Semestre y Nombre</label>
            </div>
            <div class="form-check-inline">
                <label class="form-check-label">
                <input type="radio" class="form-check-input" name="CreditosA">Creditos Aprobados</label>
            </div>
            <div class="form-check-inline">
                <label class="form-check-label">
                <input type="radio" class="form-check-input" name="CarNoC">Carrera y No. Control</label>
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <table class="table table-sm">
            <thead class="thead-dark">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Semestre</th>
                    <th scope="col">Carrera</th>
                    <th scope="col">Creditos</th>
                    <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Juanito</td>
                <td>Ramirez Torrez</td>
                <td>8</td>
                <td>Sistemas</td>
                <td>4</td>
                <td><button type="button" class="btn btn-primary btn-sm">Mas Info.</button></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Maria</td>
                <td>Juarez Mendez</td>
                <td>3</td>
                <td>Informatica</td>
                <td>2</td>
                <td><button type="button" class="btn btn-primary btn-sm">Mas Info.</button></td>
            </tr>
        </tbody>
    </table>
    <br/>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <table class="table table-sm">
            <thead class="thead-dark">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Periodo</th>
                    <th scope="col">Actividad</th>
                    <th scope="col">Acta de Actividad</th>
            </tr>
        </thead>
    </table>
    <br/>
    </div>
</div>
<br/>
</template>

<script>
import axios from "axios";
import store from "@/store";

export default {
    el: 'app',
    data () {
        return {
            filtro:{
                noControl:"",
                Nombre:"",
                ApellidoP : "",
                ApellidoM : "",
                Semestre : "",
                Carrera : "",
            }
        }
    },
    created () {
    },  
    methods: {
    }

}
</script>

<style>
label{ font-size: x-small;}

input{ font-size: small;}

</style>