<template>
  <div v-if="$store.getters.getLogin">

    <menuAdmin v-if="$store.getters.typeRoles === 'Administrador'" />
    <menuJefeDepartamento v-else-if="$store.getters.typeRoles === 'JefeDepartamento'" />
    <menuCoordinadorCarrera v-else-if="$store.getters.typeRoles === 'Cordinador'" />
    <menuVentanillaServiciosEscolares v-else-if="$store.getters.typeRoles === 'Ventanilla'" />
    <menuEstudiantes v-else-if="$store.getters.typeRoles === 'Estudiante'" />
  </div>
 <select v-model="selected" v-on:change="changeItem">
      <option disabled value="">Seleccione un elemento</option>
      <option>Administrador</option>
      <option>JefeDepartamento</option>
      <option>Cordinador</option>
      <option>Ventanilla</option>
      <option>Estudiante</option>
    </select>
    <span>Seleccionado: {{ selected }}</span>

  <login v-if="!$store.getters.getLogin" />
</template>

<script>
// @ es un alias a /src
import menuAdmin from "@/components/menu/menuAdmin.vue";
import menuJefeDepartamento from "@/components/menu/menuJefeDepartamento.vue";
import menuCoordinadorCarrera from "@/components/menu/menuCoordinadorCarrera.vue";
import menuVentanillaServiciosEscolares from "@/components/menu/menuVentanillaServiciosEscolares.vue";
import menuEstudiantes from "@/components/menu/menuEstudiantes.vue";
import login from "@/components/login/login.vue";
import store from "@/store";

export default {
  name: "init",

  data: function () {
    return {
      selected: "",
    };
  },
  store: store,
  components: {
    menuAdmin,
    menuJefeDepartamento,
    menuCoordinadorCarrera,
    menuVentanillaServiciosEscolares,
    menuEstudiantes,
    login,
  },
methods: {
    changeItem: function (event) {
      console.log(event.target.value);
      store.commit("setTypeRoles", event.target.value);
    },
  },
  mounted() {
  },
};
</script>
