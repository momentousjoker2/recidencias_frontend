<template>
    <h1 align="center">Proyecto Activos</h1>
    <br/>
    <br/>
    <div class="card">
        <div class="card-body">
            <table class="table table-sm">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Clave Actividades</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Jefe De Departamento</th>
                        <th scope="col">Responsable Actividades</th>
                        <th scope="col">Tipo Proyectos</th>
                        <th scope="col">Nombre Actividades</th>
                        <th scope="col">Período</th>                        
                        <th scope="col">Fecha Inicio</th>
                        <th scope="col">Fecha Final</th>
                        <th scope="col">Creditos</th>
                        <th scope="col">Alumbos Permitidos</th>
                    </tr>
                </thead>
                <tbody>
                        <tr v-for="Actividades in info" :key="Actividades.Id_Actividad">
                            <td>{{Actividades.Id_Actividad}} </td>
                            <td>{{Actividades.Id_Departamento}} </td>
                            <td>{{Actividades.Id_JefePersonal}} </td>
                            <td>{{Actividades.Id_Personal}} </td>
                            <td>{{Actividades.Id_Tipo_Proyecto}} </td>
                            <td>{{Actividades.Nombre_Actividad}} </td>
                            <td>{{Actividades.Periodo}}</td>
                            <td>{{Actividades.Fecha_Inicio}}  </td>
                            <td>{{Actividades.Fecha_Cierre}}  </td>
                            <td>{{Actividades.Creditos}}  </td>
                            <td>{{Actividades.Numero_Alumnos}}  </td>
                        </tr>
                </tbody>
            </table>
        <br/>
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
            info: null
        }
    },
    created () {
                let url = store.getters.getApiName + "Actividades/All"; //api url
                axios.get(url)
                    .then((res) => {
                        console.log("RESPONSE RECEIVED: ", res.data.data);
                        this.info = res.data.data;
                        let Actividad = [];
                        for(let Actividades of Object.values(this.info)){
                            if(Actividades.Estatus=="Abierto"){
                                Actividad.push(Actividades);
                }
            }
                    }) .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            });       // console.log(this.info);
    }

}
</script>

<style>

</style>