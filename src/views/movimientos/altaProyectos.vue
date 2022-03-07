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
                        <p> Parte 1 Fusce ut neque justo, et aliquet enim. In hac habitasse dictumst. Nullam commodo que erat, vitae facilisis erat. Cras at mauris ut tortor vestibulum fringilla vel sed metus. Donec interdum purus a justo feugiat rutrum. Sed ac neque ut neque dictum accumsan. Cras lacinia rutrum risus, id viverra metus dictum sit amet. Fusce venenatis, urna eget cursus placerat, dui nisl fringilla purus, nec tincidunt sapien justo ut nisl. Curabitur lobortis semper neque et varius. Etiam eget lectus risus, a varius orci. Nam placerat mauris at dolor imperdiet at aliquet lectus ultricies. Duis tincidunt mi at quam condimentum lobortis.</p>
                        <a data-toggle="tab" class="btn btn-primary" href="#tab-02">Siguiente</a>
                    </div>
                    <div class="tab-pane" id="tab-02">
                        <p>Parte 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id neque nec enim ultricies congue quis a lectus. Nulla placerat pellentesque enim eu pharetra. Nullam ornare velit vel est porttitor convallis. Nullam lobortis erat a iaculis vulputate. Vivamus vel nibh nec metus aliquam placerat in et magna. Donec ornare, metus vel ultricies porta, nisl sem vulputate sapien, sed ullamcorper purus nisi at quam. Duis sollicitudin pharetra condimentum. Mauris enim felis, placerat ac luctus id, sagittis id mauris. In varius rutrum arcu, vitae tristique urna ultrices nec. Maecenas purus turpis, congue in consequat elementum, rutrum id purus. Donec quis arcu ultricies erat viverra pretium eleifend dignissim urna.</p>
                        <a data-toggle="tab" class="btn btn-primary" href="#tab-03">Siguiente</a>
                    </div>
                    <div class="tab-pane" id="tab-03">
                        <p>Parte 3 Fusce ultrices dapibus risus, ac pellentesque sem pretium vel. Phasellus laoreet egestas lectus, nec fringilla elit sollicitudin et. Nam lectus purus, interdum et fringilla vitae, luctus vitae arcu. Praesent interdum, purus quis vehicula ultricies, odio libero imperdiet neque, eu dignissim nibh urna at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed posuere arcu. Maecenas fringilla nisi et pharetra iaculis. Nam neque tortor, egestas eget nunc ac, tempus facilisis justo. Ut et tempus dui.</p>
                        <p>Aenean euismod, eros dignissim interdum venenatis, elit neque sodales ligula, sed pretium ante velit pulvinar risus. Vestibulum at sem rhoncus turpis vestibulum ullamcorper et ut erat. Vivamus sit amet consectetur velit, eget pretium nibh.</p>
                        <a data-toggle="tab" class="btn btn-primary" href="#tab-04">Siguiente</a>
                    </div>
                    <div class="tab-pane" id="tab-04">
                        <p>Parte 4 Maecenas eu placerat ante. Fusce ut neque justo, et aliquet enim. In hac habitasse dictumst. Nullam commodo que erat, vitae facilisis erat. Cras at mauris ut tortor vestibulum fringilla vel sed metus. Donec interdum purus a justo feugiat rutrum. Sed ac neque ut neque dictum accumsan. Cras lacinia rutrum risus, id viverra metus dictum sit amet. Fusce venenatis, urna eget cursus placerat, dui nisl fringilla purus, nec tincidunt sapien justo ut nisl. Curabitur lobortis semper neque et varius. Etiam eget lectus risus, a varius orci. Nam placerat mauris at dolor imperdiet at aliquet lectus ultricies. Duis tincidunt mi at quam condimentum lobortis.</p>
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

</template>

<script>

import axios from "axios";
import store from "@/store";

export default {
    el: 'app',
    data () {
        return {
            list: {
                Alta_Proyectos:{},
                categorias:{},
            },
            

        }
    },
    created () {
        this.load();

    },
    methods: {
        load: function(event) {
                let url = store.getters.getApiName + "Movimientos/Alta_Proyectos";
                axios.get(url)
                    .then((res) => {
                        this.list.Alta_Proyectos = res.data.data;
                    });
        },      
        add: function(event){
            $('#tab-01').toggleClass('active');        
            $('#tab-04').toggleClass('active');        }
    }

}

</script>

<style>
label{ font-size: medium;}

input{ font-size: medium;}

select{ font-size: medium;}
.nav-tabs {
	 border-bottom: 2px solid #dfdfdf;
}
 .nav-tabs > li {
	 margin-bottom: 0;
}
 .nav-tabs > li > a {
	 line-height: 18px;
	 font-size: 12px;
	 font-weight: 600;
	 color: #143361;
	 border-bottom: 5px solid #fff;
	 padding: 12px 5px;
	 margin: 0;
	 border-right: 0 !important;
	 border-left: 0 !important;
}
.
 .nav-tabs > li > a:hover {
	 background: none;
	 color: #2984ee;
	 border-bottom: 5px solid #fff;
	 margin: 0;
}
 .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {
	 outline: 0;
	 cursor: pointer;
	 color: #143361;
	 border-bottom: 5px solid #143361;
	 background: none;
	 margin: 0;
}
 

</style>