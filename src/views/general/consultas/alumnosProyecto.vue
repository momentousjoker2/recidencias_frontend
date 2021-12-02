<template>
    <h1 align="center">alumnos proyecto</h1>
    <br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Datos del proyecto</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Proyecto:</label>
                <select name="Creditos" class="custom-select">
                    <option selected>--------------</option>
                    <option value="1">tutoría</option>
                    <option value="2">actividades extraescolares</option>
                    <option value="3">proyecto de investigación</option>
                    <option value="4">proyecto integrador</option>
                    <option value="5">participación en eventos académicos</option>
                    <option value="6">productividad laboral</option>
                    <option value="7">emprendedurismo</option>
                    <option value="8">fomento a la lectura</option>
                    <option value="9">construcción de prototipos</option>
                    <option value="10">desarrollo tecnológico</option>
                    <option value="11">conservación al medio ambiente</option>
                    <option value="12">participación en ediciones</option>
                    <option value="13">fomento a la cultura</option>
                    <option value="14">otra</option>
                </select>
            </div>    
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Mas detalles</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Horario:</label>
                <input type="time" id="horario" name="horario">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Periodo:</label>
                <input type="text" id="periodo" name="periodo">
            </div>
            <br/>
            <br/>
            <div class="custom-control custom-control-inline">
                <label>Fecha de inicio:</label>
                <input type="date" id="fechaI" name="fechaI">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Fecha de Fin:</label>
                <input type="date" id="fechaF" name="fechaF">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Horas:</label>
                <input type="text" id="Horas" name="Horas">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Creditos:</label>
                <input type="text" id="credito" name="credito">
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
                    <th scope="col">Nombre Alumno</th>
                    <th scope="col">Apellido paterno</th>
                    <th scope="col">Apellido Materno</th>
                    <th scope="col">Carrera</th>
                    <th scope="col">semestre</th>
                    <th scope="col"></th>
            </tr>
        </thead>
    </table>
    <br/>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>