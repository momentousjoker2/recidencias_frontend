<template>
Hola 
{{$store.getters.getRol}}
{{$store.getters.getUserName}}
</template>

<script>
import store from "@/store";
import router from "@/router";

export default {
    name: "init",

    data: function () {
        return {
        }
    }
};
</script>
