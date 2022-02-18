<template>
    <h1 align="center"> Proyectos periodo</h1>
    <br/>
    <div class="card">
        <div class="card-body">
            <form>
                <div class="custom-control custom-control-inline">
                    <label>Fecha de inicio:</label>
                    <input type="date" id="fechaI" name="fechaI">
                </div>
                <div class="custom-control custom-control-inline">
                    <label>Fecha de Fin:</label>
                    <input type="date" id="fechaF" name="fechaF">
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
                        <th scope="col">Detalle</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">No. Alumnos</th>
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