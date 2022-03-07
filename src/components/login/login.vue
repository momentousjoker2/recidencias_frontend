<template>
<div class="login">
    <h1 class="title">Bienvenido, Inicia sesión.</h1>
    <form action class="form" @submit.prevent="login">
        <label class="form-label" for="#username">Usuario:</label>
        <input v-model="username" class="form-input" type="text" id="username" required placeholder="Usuario" >
        <label class="form-label" for="#password">Password:</label>
        <input v-model="password" class="form-input" type="password" id="password" placeholder="Password" >
        <div><br></div>
    <p v-if="error.estado" class="alert alert-danger" role="alert">{{this.error.message}}</p>
    <input class="form-submit" type="submit" value="Login">
    </form>
</div>
</template>

<script>
import store from "@/store";
import axios from "axios";



export default {
    data: () => ({
        username: "",
        password: "",
        error: {
            estado: false,
            message: ""
        }
    }),
    created () {
    },

    store: store,
        methods: {
        login() {
        let url = store.getters.getApiName + "login";

        let params ={
            params:{
                        usuario: this.username,
                        password: this.password
                    }
        }

        axios.get(url,params)
            .then((res) => {
                
                if(res.data.error){
                    this.error.estado=true;
                    this.error.message="Has introducido mal el usuario o la contraseña."
                }else{
                    this.error=false;
                    store.commit("setIdUsername",res.data.username)
                    store.commit("setUsername",res.data.nombre)        
                    store.commit("setUserRol",res.data.rol)
                    store.commit("setLogged",true)
                    
                    location.reload();
                }
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
                    this.error.estado=true;
                    this.error.message="Error con el servidor."            
            })
        }
    }
    
};
</script>

<style lang="css" scoped>
.login {
    padding: 2rem;
}
.title {
    text-align: center;
}
.form {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    min-width: 350px;
    max-width: 100%;
    background: #13232fe6;
    border-radius: 5px;
    padding: 40px;
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
    margin-top: 2rem;
    color: white;
    margin-bottom: 0.5rem;

}
.form-input {
    padding: 10px 15px;
    background: none;
    background-image: none;
    border: 1px solid white;
    color: white;

}
.form-submit {
    background: #1ab188;
    border: none;
    color: white;
    margin-top: 3rem;
    padding: 1rem 0;
    cursor: pointer;

}
</style>
