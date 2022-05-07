<template>
<loading v-model:active="isLoading" :can-cancel="false"  :is-full-page="fullPage"/>

    <h1 align="center">Maestros</h1>
    <br/>
    <div class="card">
        <div class="card-body">
            <form>
                <table id="table" class="table table-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th >Clave Docente</th>
                            <th >Nombre Del Docente</th>
                            <th >Departamento</th>
                            <th >Puesto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="Empleados in info" :key="Empleados.Id_Personal">
                            <td>{{Empleados.id_pers}} </td>
                            <td>{{Empleados.nom_pers}}</td>
                            <td>{{Empleados.id_depto}}  </td>
                            <td>{{Empleados.puesto}}  </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th >Clave Docente</th>
                            <th >Nombre Del Docente</th>
                            <th >Departamento</th>
                            <th >Puesto</th>
                        </tr>
                    </tfoot>
                </table>
            </form>
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
            info: null,
            isLoading: false,
            fullPage: true

        }
    },
    created () {
            this.isLoading=true;

                let url = store.getters.getApiName + "catalagos/empleados/"; 
                axios.get(url)
                    .then((res) => {
                        this.info = res.data.data;
                        this.updated();
                                    this.isLoading=false;

                    }) .catch((err) => {
                    });     
    },
    methods: {
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
        }
    }

}
</script>

<style>

</style>