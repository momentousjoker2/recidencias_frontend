<template>
    <h1 align="center">Calificar Alumnos</h1>

    <h4 align="center">Calificar Actividad</h4>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Actividad</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Nombre:</label>
                <select name="nombre" class="custom-select">
                    <option selected>-------</option>
                    <option value="1">Nombre 1</option>
                    <option value="2">Nombre 2</option>
                </select>
            </div>
            <div class="custom-control custom-control-inline">
                <label>Periodo:</label>
                <input type="text" id="Periodo" name="Periodo">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Horario:</label>
                <input type="text" id="horario" name="horario">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Tipo de Proyecto:</label>
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
        <h4 class="card-title" align="center">Alumno</h4>
        <form>
            <div class="custom-control custom-control-inline">
                <label>Nombre del Alumno:</label>
                <input type="text" id="nombreA" name="nombreA">
            </div>
            <div class="custom-control custom-control-inline">
                <label>Calificacion:</label>
                <input type="text" id="calificacion" name="calificacion">
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
                    <th scope="col">Criterio a evaluar</th>
                    <th scope="col">Insuficiente</th>
                    <th scope="col">Suficiente</th>
                    <th scope="col">Bueno</th>
                    <th scope="col">Notable</th>
                    <th scope="col">Excelente</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Cumple en tiempo y forma con las actividades encomendadas alcanzando los objetivos.</td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="Insuficient">Insuficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="Suficiente">Suficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="Bueno">Bueno</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="Notable">Notable</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="Excelente">Excelente</label>
                    </div>
                </td>
            </tr>

            <tr>
                <th scope="row">2</th>
                <td>Trabaja en equipo y se adapta a nuevas situaciones.</td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="2Insuficient">Insuficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="2Suficiente">Suficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="2Bueno">Bueno</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="2Notable">Notable</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="2Excelente">Excelente</label>
                    </div>
                </td>
            </tr>

            <tr>
                <th scope="row">3</th>
                <td>Muestra liderazgo en las actividades encomendadas.</td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="3Insuficient">Insuficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="3Suficiente">Suficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="3Bueno">Bueno</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="3Notable">Notable</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="3Excelente">Excelente</label>
                    </div>
                </td>
            </tr>

            <tr>
                <th scope="row">4</th>
                <td>Organiza su tiempo y trabaja de manera proactiva.</td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="4Insuficient">Insuficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="4Suficiente">Suficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="4Bueno">Bueno</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="4Notable">Notable</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="4Excelente">Excelente</label>
                    </div>
                </td>
            </tr>

            <tr>
                <th scope="row">5</th>
                <td>Interpreta la realidad y se sensibiliza aportando soluciones a la problemática con la actividad complementaria.</td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="5Insuficient">Insuficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="5Suficiente">Suficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="5Bueno">Bueno</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="5Notable">Notable</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="5Excelente">Excelente</label>
                    </div>
                </td>
            </tr>

            <tr>
                <th scope="row">6</th>
                <td>Realiza sugerencias innovadoras para beneficio o mejora del programa en el que participa.</td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="6Insuficient">Insuficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="6Suficiente">Suficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="6Bueno">Bueno</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="6Notable">Notable</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="6Excelente">Excelente</label>
                    </div>
                </td>
            </tr>

            <tr>
                <th scope="row">7</th>
                <td>Tiene iniciativa para ayudar en las actividades encomendadas y muestra espíritu de servicio.</td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="7Insuficient">Insuficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="7Suficiente">Suficiente</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="7Bueno">Bueno</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="7Notable">Notable</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="7Excelente">Excelente</label>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <br/>
    </div>
</div>
<div class="card">
    <div class="card-body">
        <form>
            <div class="custom-control custom-control-inline">
                <label>Observaciones:</label>
                <textarea class="form-control" rows="3" cols="80" id="Observaciones"></textarea>
            </div>
            <div class="custom-control custom-control-inline">
                <button type="button" class="btn btn-primary btn-sm">Calificar</button>
            </div>
        </form>
    </div>
</div>
<br/>
</template>

<script>
export default {

}
</script>

<style>
label{ font-size: small;}

input{ font-size: small;}

</style>