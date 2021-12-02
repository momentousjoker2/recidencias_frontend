<template>
<h4 align="center">Registrar Tipo de Proyecto</h4>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Tipo Proyecto</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Nombre:</label>
                <input type="text" id="Nombre" name="Nombre">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Descripcion:</label>
                <input type="text" id="descripcion" name="descripcion">
            </div>
            <br/>
            <br/>
            <div class="custom-control custom-control-inline">
                <label>Encargado:</label>
                <button type="button" class="btn btn-primary btn-sm">Agregar</button>
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Consulta</h4>
        <table class="table table-sm">
        <thead class="thead-dark">
            <tr>
                <th scope="col"></th>
                <th scope="col">Nombre:</th>
                <th scope="col">Descripcion:</th>
                <th scope="col">Estatus:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Emprendedurismo</td>
                <td>Concurso de emprendedores de Cd. Guzman</td>
                <td>Cerrada</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <th scope="row">2</th>
                <td>Fomento a la lectura</td>
                <td>Paseo a la FIL en Guadalajara</td>
                <td>en curso</td>
            </tr>
        </tbody>
    </table>
    </div>
</div> 
</template>

<script>

</script>

<style>
label{ font-size: small;}

input{ font-size: small;}

</style>