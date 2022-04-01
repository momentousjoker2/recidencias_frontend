<template>
    <h1 align="center"> Traspasar Alumnos</h1>
    <br />
    <div class="card">
        <div class="card-body">
                <div class="custom-control custom-control-inline">
                    <center><button type="button" class="btn btn-primary btn-sm">Traspasar Alumnos</button></center>
                </div>    
        </div>
    </div>
    <br/>
    
    <br/>
    <div class="card">
        <div class="card-body">
            <form>
                <table class="table table-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">No. Control</th>
                            <th scope="col">Nombre Del Alumno</th>
                            <th scope="col">Semestre</th>
                            <th scope="col">Carrera</th>
                            <th scope="col">Actividades</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="Estudiantes in info.full" :key="Estudiantes.ID " >
                            <td>{{Estudiantes.ID}} </td>
                            <td>{{Estudiantes.Nombre }}</td>
                            <td>{{Estudiantes.semestre}}  </td>
                            <td>{{Estudiantes.Carrera}}  </td>
                            <td><button v-on:click="mostrar(Estudiantes)" type="button" class="btn btn-primary" data-toggle="modal"  data-keyboard="false" data-backdrop="static" data-target="#exampleModal" >Mostrar</button></td>
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

import axios from "axios";
import store from "@/store";

export default {
    el: 'app',
    data () {
        return {
            info:{
                full:null,
                datosM:{
                    Nombre:"",
                    Contador: "",
                }
            }
        }
    },
    store: store,
    created () {
        let params =
        {
            params:{
                        depto:  store.getters.getDepto,
                    }
        }

                let url = store.getters.getApiName + "Catalagos/estudiantes"; 
                axios.get(url,params)
                    .then((res) => {
                        this.info.full = res.data.data;
                    }) .catch((err) => {
                        console.log("AXIOS ERROR: ", err);
                    });       
    },    
    methods: {
        mostrar:function(datos){
            this.info.datosM=datos;
        },
        close:function(event){
            this.info.datosM=null;
        }
    }
}

</script>

<style>

</style>