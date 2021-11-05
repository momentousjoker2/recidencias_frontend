<template>
<br/>
<div class="card">
    <div class="card-body">
        <h4 class="card-title" align="center">Solicitudes de Actividad</h4>
    <br/>
    <table class="table table-sm">
        <thead class="thead-dark">
            <tr>
                <th scope="col"></th>
                <th scope="col">Actividad:</th>
                <th scope="col">No. de control:</th>
                <th scope="col">Nombre del alumno:</th>
                <th scope="col">Carrera:</th>
                <th scope="col">Aprobar</th>
                <th scope="col">Rechazar</th>
                <th scope="col">Motivo:</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Altar de muertos</td>
                <td>17290712</td>
                <td>Jessica Jazmin Gonzalez Romero</td>
                <td>Informatica</td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="Aprobar">Aprobar</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="Rechazar">Rechazare</label>
                    </div>
                </td>
                <td><input type="text" id="Motivo" name="Motivo"></td>
                <td><button type="button" class="btn btn-primary btn-sm">Enviar</button></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Altar de muertos</td>
                <td>16290711</td>
                <td>Cristian Emmanuel Amezcua Moreno</td>
                <td>Informatica</td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="2Aprobar">Aprobar</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="2Rechazar">Rechazare</label>
                    </div>
                </td>
                <td><input type="text" id="Motivo" name="Motivo"></td>
                <td><button type="button" class="btn btn-primary btn-sm">Enviar</button></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Altar de muertos</td>
                <td>17290710</td>
                <td>Emmanuel Camarena Becerra</td>
                <td>Informatica</td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="3Aprobar">Aprobar</label>
                    </div>
                </td>
                <td>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="3Rechazar">Rechazare</label>
                    </div>
                </td>
                <td><input type="text" id="Motivo" name="Motivo"></td>
                <td><button type="button" class="btn btn-primary btn-sm">Enviar</button></td>
            </tr>
        </tbody>
    </table>
    </div>
</div>
</template>

<script>

</script>

<style>
th{ font-size: small;
    text-align: center;
}
td{ font-size: medium}
</style>