<template>
  <div v-if="$store.getters.getLogged === 'true'">
    <menuAdministrador v-if="$store.getters.getRol === 'Administrador'"  />
    <menuJefeDepartamento v-else-if="$store.getters.getRol === 'JefeDepartamento'" />
    <menuCoordinadorCarrera v-else-if="$store.getters.getRol === 'Cordinador'" />
    <menuVentanillaServiciosEscolares v-else-if="$store.getters.getRol === 'Ventanilla'"  />
    <menuEstudiantes v-else-if="$store.getters.getRol === 'Estudiante'"  />
  </div>
  
  <login v-if="$store.getters.getLogged==='false'" />
  
  <div v-if="$store.getters.getLogged === 'true'">
    <select v-model="selected" v-on:change="changeItem">
      <option disabled value="">Seleccione un elemento</option>
      <option>Administrador</option>
      <option>JefeDepartamento</option>
      <option>Cordinador</option>
      <option>Ventanilla</option>
      <option>Estudiante</option>
    </select>
    <span>Seleccionado: {{ selected }}</span>
  </div>
</template>

<script>
import store from "@/store";
import router from "@/router";

//Menus para categorias
import menuAdministrador from "@/components/menu/menuAdmin.vue";
import menuJefeDepartamento from "@/components/menu/menuJefeDepartamento.vue";
import menuCoordinadorCarrera from "@/components/menu/menuCoordinadorCarrera.vue";
import menuVentanillaServiciosEscolares from "@/components/menu/menuVentanillaServiciosEscolares.vue";
import menuEstudiantes from "@/components/menu/menuEstudiantes.vue";

import login from "@/components/login/login.vue";

export default {
  name: "init",

  data: function () {
    return {
      login:{
        islogged:true
      },
      selected: "",
    };
  },
  created () {
    // if(router.currentRoute.value.path === "/"){
    //   // if(store.getters.getLogged)
    //   //     {
    //   //       switch (store.getters.getRol) {
    //   //         case 'Administrador':
    //   //           router.push("indexAdmin")
    //   //           break;
    //   //         case 'JefeDepartamento':
    //   //           router.push("indexJefeDep")
    //   //           break;
    //   //         case 'Cordinador':
    //   //           router.push("indexCoordinadores")
    //   //           break;
    //   //         case 'Ventanilla':
    //   //           router.push("indexVentanilla")
    //   //           break;
    //   //         case 'Estudiante':
    //   //           router.push("indexAlumno")
    //   //           break;
    //   //         default:
    //   //           router.push("menu")
    //   //           break;
    //   //       }
    //   //     }
    //   //   else
    //   //   { 
    //   //     router.push("login")
    //   //       if(!store.getters.getInitialState){
    //   //           location.reload();
    //   //           store.commit("setInitialState",true)
    //   //         }
    //   //     }
    // }
  },
  store: store,
  components: {
    login,
    menuAdministrador,
    menuJefeDepartamento,
    menuCoordinadorCarrera,
    menuVentanillaServiciosEscolares,
    menuEstudiantes,
  },
  methods:{
    changeItem: function (event) {
      store.commit("setUserRol",event.target.value);
    }
  }
};
</script>
