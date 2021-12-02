<template>
<h4 align="center">Registrar Actividad</h4>

<div class="card">
    <div class="card-body">
        <form>
            <div class="custom-control custom-control-inline">
                <label>Id Actividad:</label>
                <input type="text" id="idActividad" name="idActividad">
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Departamento</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Nombre departamento:</label>
                <select name="Nombre" class="custom-select">
                    <option selected>-------</option>
                    <option value="1">Sistemas</option>
                    <option value="2">Informatica</option>
                </select>
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Jefe de personal</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Nombre:</label>
                <select name="Nombre" class="custom-select">
                    <option selected>-------</option>
                    <option value="1">Lua</option>
                    <option value="2">Elva</option>
                </select>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Id:</label>
                <input type="text" id="idJefe" name="idJefe">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Puesto:</label>
                <input type="text" id="puesto" name="puesto">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Departamento:</label>
                <input type="text" id="departamento" name="departamento">
            </div>
        </form>
    </div>
</div>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Personal</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Nombre:</label>
                <select name="Nombre" class="custom-select">
                    <option selected>-------</option>
                    <option value="1">Anna</option>
                    <option value="2">Julio</option>
                </select>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Id:</label>
                <input type="text" id="idJefe" name="idJefe">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Puesto:</label>
                <input type="text" id="puesto" name="puesto">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Departamento:</label>
                <input type="text" id="departamento" name="departamento">
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
                <select name="Nombre" class="custom-select">
                    <option selected>-------</option>
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
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Semestre</th>
                    <th scope="col">Carrera</th>
                    <th scope="col">Creditos</th>
                    <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Juanito</td>
                <td>Ramirez Torrez</td>
                <td>8</td>
                <td>Sistemas</td>
                <td>4</td>
                <td><button type="button" class="btn btn-primary btn-sm">Mas Info.</button></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Maria</td>
                <td>Juarez Mendez</td>
                <td>3</td>
                <td>Informatica</td>
                <td>2</td>
                <td><button type="button" class="btn btn-primary btn-sm">Mas Info.</button></td>
            </tr>
        </tbody>
    </table>
    <br/>
    </div>
</div>
<br/>
</template>

<script>

</script>

<style>
label{ font-size: small;}

input{ font-size: small;}

select{ font-size: small;}

</style>