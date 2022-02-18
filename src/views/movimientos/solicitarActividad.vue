<template>
    <h1 align="center">Solicitar Actividades</h1>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Actividad</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Nombre:</label>
                <input type="text" id="Nombre" name="Nombre">
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

            <div class="custom-control custom-control-inline">
                <button type="button" class="btn btn-primary btn-sm">Seleccionar</button>
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <br/>
        <center><button type="button" class="btn btn-primary btn-lg">Enviar Solicitud</button></center>
        <br/>
    </div>
</div>
</template>

<script>

</script>

<style>
label{ font-size: small;}

input{ font-size: small;}
</style>