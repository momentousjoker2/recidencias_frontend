<template>
    <h1>{{$store.getters.typeRoles}}</h1>

    <menuAdmin                        v-if="$store.getters.typeRoles==='Administrador'"/>
    <menuJefeDepartamento             v-else-if="$store.getters.typeRoles==='JefeDepartamento'"/>
    <menuCoordinadorCarrera           v-else-if="$store.getters.typeRoles==='Cordinador'"/>
    <menuVentanillaServiciosEscolares v-else-if="$store.getters.typeRoles==='Ventanilla'"/>
    <menuEstudiantes                  v-else-if="$store.getters.typeRoles==='Estudiante'"/>

</template>

<script>
// @ es un alias a /src
import menuAdmin from "@/components/menuAdmin.vue";
import menuJefeDepartamento from "@/components/menuJefeDepartamento.vue";
import menuCoordinadorCarrera from "@/components/menuCoordinadorCarrera.vue";
import menuVentanillaServiciosEscolares from "@/components/menuVentanillaServiciosEscolares.vue";
import menuEstudiantes from "@/components/menuEstudiantes.vue";
import store from './store'

export default {
  name: "home",
  store,
  components: {
    menuAdmin,
    menuJefeDepartamento,
    menuCoordinadorCarrera,
    menuVentanillaServiciosEscolares,
    menuEstudiantes
  },  
};
</script>
