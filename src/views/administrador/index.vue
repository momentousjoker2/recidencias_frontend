<template>
    <h1>Hola Administrador</h1> 
    <h1>{{username}}</h1> 
</template>

<script>
import store from "@/store";

export default {
 data: () => ({
        username: store.getters.getName
    }),
    store: store,
}
</script>

<style>

</style>