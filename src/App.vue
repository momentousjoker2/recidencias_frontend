<template>
  <div>
    <menuAdmin/>
    <menuJefeDepartamento />
    <menuCoordinadorCarrera/>
    <menuVentanillaServiciosEscolares/>
    <menuEstudiantes/>
  </div>
</template>

<script>
// @ es un alias a /src
import menuAdmin from "@/components/menuAdmin.vue";
import menuJefeDepartamento from "@/components/menuJefeDepartamento.vue";
import menuCoordinadorCarrera from "@/components/menuCoordinadorCarrera.vue";
import menuVentanillaServiciosEscolares from "@/components/menuVentanillaServiciosEscolares.vue";
import menuEstudiantes from "@/components/menuEstudiantes.vue";

export default {
  name: "home",
  components: {
    menuAdmin,
    menuJefeDepartamento,
    menuCoordinadorCarrera,
    menuVentanillaServiciosEscolares,
    menuEstudiantes
  },
};
</script>
