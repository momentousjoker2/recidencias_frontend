<template>
<div class="login">
    <h1 class="title">Login in the page</h1>
    <form action class="form" @submit.prevent="login">
        <label class="form-label" for="#username">Usuario:</label>
        <input v-model="username" class="form-input" type="text" id="username" required placeholder="Usuario" >
        <label class="form-label" for="#password">Password:</label>
        <input v-model="password" class="form-input" type="password" id="password" placeholder="Password" >
    <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
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
        error: false
    }),
    store: store,
    methods: {
        login() {
        let auth = store.getters.getApiKey; //auth key
        let url = store.getters.getApiName; //api url

     /*    let data =  
        {
            email: this.username, //varEmail is a variable which holds the email
            password: this.password, //varPassword is
        }
 */
        let headers =
        {
            Authorization: auth
        }
        var data = new FormData();
            data.append('usuario', '17290713');
            data.append('password', '123');

        var config = {
            headers: { 
                    'Authorization': auth
            },
            data : data
        };

        axios.get(url,config).then(function (res) {
                console.log("respuesta opcion 1" + res);
        }).catch((err) => {
                console.log("Error opcion 1" + err);
        });

        axios.get(config).then(function (res) {
                console.log("respuesta opcion 2" + res);
        }).catch((err) => {
                console.log("Error opcion 2" + err);
        });

        axios.get(url,data,headers).then(function (res) {
                console.log("respuesta opcion 3" + res);
        }).catch((err) => {
                console.log("Error opcion 3" + err);
        });

        /* 
        axios(
        {
            method: 'GET',
            url: url,        
        },{         
            data : {
            }, headers: {
                "Authorization":"3aebc6817c43ee5433194c9c2138cd72",
            }
        }).then(function (res) {
            console.log(res)
        }).catch((err) => {
                console.log( err);
        });
 */
       

            /* 
                 axios.get('/Catalagos/carreras') 
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res.data);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
        axios.get('http://proyectocreditosfrontend.000webhostapp.com/Catalagos/carreras', {
            headers: {
            }
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.error(error)
            })

        axios.get("",config)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res.data);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
               */
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
    background: rgba(19, 35, 47, 0.9);
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
