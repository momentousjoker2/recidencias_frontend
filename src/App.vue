<template>
  <h1>{{ $store.state.rol }}</h1>

  <select v-model="selected" v-on:change="changeItem">
    <option disabled value="">Seleccione un elemento</option>
    <option>Administrador</option>
    <option>JefeDepartamento</option>
    <option>Cordinador</option>
    <option>Ventanilla</option>
    <option>Estudiante</option>
  </select>
  <span>Seleccionado: {{ selected }}</span>

  <menuAdmin v-if="$store.getters.typeRoles === 'Administrador'" />
  <menuJefeDepartamento
    v-else-if="$store.getters.typeRoles === 'JefeDepartamento'"
  />
  <menuCoordinadorCarrera
    v-else-if="$store.getters.typeRoles === 'Cordinador'"
  />
  <menuVentanillaServiciosEscolares
    v-else-if="$store.getters.typeRoles === 'Ventanilla'"
  />
  <menuEstudiantes v-else-if="$store.getters.typeRoles === 'Estudiante'" />
</template>

<script>
// @ es un alias a /src
import menuAdmin from "@/components/menuAdmin.vue";
import menuJefeDepartamento from "@/components/menuJefeDepartamento.vue";
import menuCoordinadorCarrera from "@/components/menuCoordinadorCarrera.vue";
import menuVentanillaServiciosEscolares from "@/components/menuVentanillaServiciosEscolares.vue";
import menuEstudiantes from "@/components/menuEstudiantes.vue";
import store from "./store";

export default {
  name: "home",
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
  },
  methods: {
    changeItem: function (event) {
      console.log(event.target.value);
      store.commit("setTypeRoles", event.target.value);
    },
  },
};
</script>
