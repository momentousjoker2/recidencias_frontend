<template>
    <h1 align="center">Alumnos Proyecto</h1>
    <br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Datos Del Proyecto</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Proyecto:</label>
                <select name="Creditos" class="custom-select">
                    <option selected>--------------</option>
                    <option value="1">Tutoría</option>
                    <option value="2">Actividades Extraescolares</option>
                    <option value="3">Proyecto De Investigación</option>
                    <option value="4">Proyecto Integrador</option>
                    <option value="5">Participación En Eventos Académicos</option>
                    <option value="6">Productividad Laboral</option>
                    <option value="7">Emprendedurismo</option>
                    <option value="8">Fomento A La Lectura</option>
                    <option value="9">Construcción De Prototipos</option>
                    <option value="10">Desarrollo Tecnológico</option>
                    <option value="11">Conservación Al Medio Ambiente</option>
                    <option value="12">Participación En Ediciones</option>
                    <option value="13">Fomento A La Cultura</option>
                    <option value="14">Otra</option>
                </select>
            </div>    
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Mas Detalles</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Horario:</label>
                <input type="time" id="horario" name="horario">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Período:</label>
                <input type="text" id="periodo" name="periodo">
            </div>
            <br/>
            <br/>
            <div class="custom-control custom-control-inline">
                <label>Fecha De Inicio:</label>
                <input type="date" id="fechaI" name="fechaI">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Fecha De Fin:</label>
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
                    <th scope="col">Apellido Paterno</th>
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