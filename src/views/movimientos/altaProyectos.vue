<template>
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
                <table class="table table-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">id activida</th>
                            <th scope="col">departamento</th>
                            <th scope="col">jefe de departamento</th>
                            <th scope="col">responsable</th>
                            <th scope="col">hora inicio</th>
                            <th scope="col">hora fin</th>
                            <th scope="col">periodo</th>
                            <th scope="col">fecha inicio</th>
                            <th scope="col">fecha cierre</th>
                            <th scope="col">numero alumnos</th>
                            <th scope="col">estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="proyectos in this.list.Alta_Proyectos" :key="proyectos.idactivida">
                                <td>{{proyectos.idactivida}} </td>
                                <td>{{proyectos.departemento.nombre_departamento}} </td>
                                <td>{{proyectos.jefedepartamento.nombre_jefedepartamento}} </td>
                                <td>{{proyectos.responsable.nombre_responsable}} </td>
                                <td>{{proyectos.horainicio}} </td>
                                <td>{{proyectos.horafin}} </td>
                                <td>{{proyectos.periodo.nombre_periodo}} </td>
                                <td>{{proyectos.fechainicio}} </td>
                                <td>{{proyectos.fechacierre}} </td>
                                <td>{{proyectos.numeroalumnos}} </td>
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
                                <select name="departamento" class="custom-select form-control-sm" v-model="data.departamento" required >
                                    <option v-for="categoria in this.list.Deptos" :key="categoria.id_depto" :value="categoria" >{{categoria.nom_depto}}</option>
                                </select>
                                <br>
                        </div>                        
                        <div class="mb-3"> 
                                <label>Encargado del departamento</label>
                                <p>{{this.data.departamento.nom_pers}}</p>
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

import axios from "axios";
import store from "@/store";

export default {
    el: 'app',
    data () {
        return {
            list: {
                CatalagoProyectos:{},
                Deptos:{},
                PersonalResponsable:{},
                Periodo:{}
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
                PersonalResponsable:{
                    puesto:""
                    },
                Periodo:{
                    estado:""
                }
            }
            

        }
    },
    created () {
        this.load();

    },
    methods: {
        load: function(event) {
                let url = store.getters.getApiName + "Catalagos/departamentos/JefeDepartamento";
                axios.get(url)
                    .then((res) => {
                        this.list.Deptos = res.data.data;
                    });

                url = store.getters.getApiName + "Catalagos/empleados";
                axios.get(url)
                    .then((res) => {
                        this.list.PersonalResponsable = res.data.data;
                    });

                url = store.getters.getApiName + "Movimientos/Catalagos_Proyecto";
                axios.get(url)
                    .then((res) => {
                        this.list.CatalagoProyectos = res.data.data;
                    });
                
                url = store.getters.getApiName + "Catalagos/periodo";
                axios.get(url)
                    .then((res) => {
                        this.list.Periodo = res.data.data;
                    });
        },      
        add: function(event){
            $('#tab-01').toggleClass('active');        
            $('#tab-04').toggleClass('active');   
            console.log("Agregar")
            console.log(this.data)

        },
        close: function(event){
                        console.log("Cerrar")
            this.data.CatalagoProyectos.credito=""
            this.data.CatalagoProyectos.horassemanales=""
            this.data.CatalagoProyectos.categoria.nombre=""
            this.data.departamento.nom_pers=""
            this.data.PersonalResponsable.puesto=""
            this.data.Periodo.estado=""
                        console.log(this.data)


        }
    }

}

</script>

<style>
label{ font-size: medium;}

input{ font-size: medium;}

select{ font-size: medium;}

 

</style>