<template>
    <h1 align="center"> traspasar carreras</h1>
    <br />
    <div class="card">
        <div class="card-body">
            <form>
                <div class="custom-control custom-control-inline">
                    <center><button type="button" class="btn btn-primary btn-sm">Traspasar Carreras</button></center>
                </div>    
            </form>
        </div>
    </div>
    <br/>
    <div class="card">
        <div class="card-body">
            <form>
                <table class="table table-sm">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Clave Carrera</th>
                            <th scope="col">Nombre Carrera</th>
                            <th scope="col">Siglas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="carreras in info" :key="carreras.IdCar">
                                <th scope="col"></th>
                                <td>{{carreras.IdCar}} </td>
                                <td>{{carreras.NombreCar}} </td>
                                <td>{{carreras.Siglas}} </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</template>

<script>


const axios = require('axios').default;

export default {
    el: 'app',
    data () {
        return {
            info: null
        }
    },
    created () {
        axios
        .get('https://node-websistemas.000webhostapp.com/catalagos/carreras')
        .then(response => (this.info = response.data))
    }

}
</script>

<style>

</style>