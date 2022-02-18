<template>
<h4 align="center">Registrar Actividad</h4>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Departamento</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Nombre departamento:</label>
                <select name="nombre_departamento" class="custom-select"  v-model="data.departamento_selecion" @change="filtrarEmpleados()" required >
                    <option v-for="Departamento in departamento_info" :key="Departamento.id_Departamento" :value="Departamento">{{Departamento.Nombre_Departamento}}</option>
                </select>
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Jefe de departamento</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Nombre:</label>
                <select name="Nombre" class="custom-select" v-model="data.jefePersonal_select" required>
                    <option v-for="JefePersonal in personal_info.listaJefeDepartamento" :key="JefePersonal.Id_Personal" :value="JefePersonal" selected>{{JefePersonal.Nombre_Personal}}</option>
                </select>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Puesto:</label>
                <label>{{data.jefePersonal_select.Puesto}}</label>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Departamento:</label>
                <label>{{data.jefePersonal_select.Id_Departamento}}</label>
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Responsable de actividad</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Nombre:</label>
                <select name="Nombre" class="custom-select" v-model="data.Personal_select" required>
                    <option v-for="Personal in personal_info.listaPersonalEncargado" :key="Personal.Id_Personal" :value="Personal" selected>{{Personal.Nombre_Personal}}</option>
                </select>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Puesto:</label>
                <label>{{data.Personal_select.Puesto}}</label>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Departamento:</label>
                <label>{{data.Personal_select.Id_Departamento}}</label>
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Tipo Proyecto</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Nombre:</label>
                <select name="Nombre" class="custom-select" v-model="data.tipo_Proyecto_select" required>
                    <option v-for="tipo_Proyecto in tipo_Proyecto_info" :key="tipo_Proyecto.Id_Tipo_Proyecto" :value="tipo_Proyecto">{{tipo_Proyecto.Nombre_Tipo_Proyecto}}</option>
                </select>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Descripcion:</label>
                <label>{{data.tipo_Proyecto_select.Descripcion}}</label>
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Actividad</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Nombre de la actividad:</label>
                <input type="text" id="NombreA" name="NombreA" v-model="data.NombreA" required>
            </div>
            <br/>
            <br/>
            <div class="custom-control custom-control-inline">
                <label>Horario Inicial:</label>
                <input type="time" id="horario" name="horario" v-model="data.horarioInicio" required>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Horario Final:</label>
                <input type="time" id="horario" name="horario" v-model="data.horarioFinal" required>
            </div>
            <br/>
            <br/>
            <div class="custom-control custom-control-inline">
                <label>Periodo:</label>
                <select id="periodo" name="periodo"  v-model="data.periodo" required>
                    <option value="EneroJunio" selected>Enero-Junio</option>
                    <option value="AgostoDiciembre">Agosto-Diciembre</option>
                    <option value="verano">Verano</option>
                </select>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Creditos Aprobados:</label>
                <select name="Creditos"  v-model="data.Creditos" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <br/>
            <br/>
            <div class="custom-control custom-control-inline">
                <label>Fecha de inicio:</label>
                <input type="date" id="fechaI" name="fechaI" v-model="data.FechaInicio" required>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Fecha de Fin:</label>
                <input type="date" id="fechaF" name="fechaF" v-model="data.FechaCierre" required>
            </div>
            <br/>
            <br/>
            <div class="custom-control custom-control-inline">
                <label>Horas Semanales:</label>
                <input type="number" id="Horas" name="Horas" v-model="data.HorasSemanales" required>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Numero de alumnos permitidos:</label>
                <input type="number" id="Horas" name="Horas" v-model="data.noAlumnos" required>
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Formato de aprobacion</h4>
        <form>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="formatoA" name="formatoA" @change="file" accept="application/pdf" required>
                <label class="custom-file-label" for="formatoA">Subir formato</label>
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <center><button type="button" class="btn btn-primary btn-lg" v-on:click="addProyecto">Agregar Actividad</button></center>
    </div>
</div>
<br/>

{{data}}
</template>

<script>

import axios from "axios";
import store from "@/store";

export default {
    el: 'app',
    data () {
        return {
            data:{
                departamento_selecion:{},
                jefePersonal_select:{},
                Personal_select:{},
                tipo_Proyecto_select:{},
                NombreA:"",
                horario:"",
                periodo:"",
                fechaI:"",
                fechaF:"",
                credito:"",
                file:null,
            },

            departamento_info: null,
            tipo_Proyecto_info: null,
            personal_info : {
                listaCompleta:null,
                listaPersonalEncargado:null,
                listaJefeDepartamento:null,
            },
        }
    },
    created () {
                this.departamentos();
                this.personal();
                this.Tipo_Proyecto();

    },
    methods: {
        departamentos: function (event) {
            let url = store.getters.getApiName + "Catalagos/departamentos"; //api url
                axios.get(url)
                    .then((res) => {
                        this.departamento_info = res.data.data;
                    }) .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            });       
        },
        personal : function (event) {
            let url = store.getters.getApiName + "Catalagos/empleados"; //api url
                axios.get(url)
                    .then((res) => {
                        this.personal_info.listaCompleta = res.data.data;
                    }) .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            });   
        },
        Tipo_Proyecto: function (event) {
            let url = store.getters.getApiName + "Catalagos/tipo_Proyecto"; //api url
                axios.get(url)
                    .then((res) => {
                        this.tipo_Proyecto_info = res.data.data;
                    }) .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            });  
        },
        addProyecto: function (event) {
            let url = store.getters.getApiName + "Actividades/insert"; //api url

            console.log(this.data.file);
            let datos = new FormData();
                datos.append("IdDepartamento", this.data.departamento_selecion.id_Departamento);
                datos.append("idJefeDepartamento", this.data.jefePersonal_select.Id_Personal);
                datos.append("IdPersonalResponsable", this.data.Personal_select.Id_Personal);
                datos.append("IdTipoProyecto", this.data.tipo_Proyecto_select.Id_Tipo_Proyecto);
                datos.append("Nombre_Proyecto", this.data.NombreA);
                datos.append("HorarioInicio", this.data.horarioInicio);
                datos.append("HorarioFin", this.data.horarioFinal);//AQUI
                datos.append("Periodo", this.data.periodo);
                //datos.append("OficioAutorizacion", this.data.file,this.data.file.name);
                datos.append("FechaInicio", this.data.FechaInicio);
                datos.append("FechaCierre", this.data.FechaCierre);
                datos.append("Creditos", this.data.Creditos);
                datos.append("HorasSemanales", this.data.HorasSemanales);
                datos.append("noAlumnos", this.data.noAlumnos);
                datos.append("Estatus", "Abierto");
                
                axios.post(url,datos,{headers: { 'Content-Type': 'multipart/form-data' }})
                        .then((res) => {
                            console.log(res.data)
                    }) .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            });  
        },

        filtrarEmpleados: function (event) {
            let ArregloJefeDepartameto =[];
            let ArregloEmpleados = [];
            for(let empleados of Object.values(this.personal_info.listaCompleta)){
                if(empleados.Id_Departamento==this.data.departamento_selecion.Nombre_Departamento ){
                    if(empleados.Puesto=="JefeDepartamento")
                        ArregloJefeDepartameto.push(empleados);

                    else
                        ArregloEmpleados.push(empleados);
                }
            }
        this.personal_info.listaPersonalEncargado=ArregloEmpleados;
        this.personal_info.listaJefeDepartamento=ArregloJefeDepartameto;
        },        
        file:function (event) {
            this.data.file=event.target.files[0];
        },
    },
    
    computed: {
    },

}

</script>

<style>
label{ font-size: medium;}

input{ font-size: medium;}

select{ font-size: medium;}

</style>