import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
// Eliminar este componente import VueSpinners from 'vue-spinners'


if (sessionStorage.length === 0) {
    sessionStorage.setItem("islogged", false)
    sessionStorage.setItem("User_id", "")
    sessionStorage.setItem("User_username", "")
    sessionStorage.setItem("User_depto", "")
    sessionStorage.setItem("User_rol", "")
} else {
    store.commit("setLogged", sessionStorage.getItem("islogged"))
    store.commit("setIdUsername", sessionStorage.getItem("User_id"))
    store.commit("setUsername", sessionStorage.getItem("User_username"))
    store.commit("setUserDepto", sessionStorage.getItem("User_depto"))
    store.commit("setUserRol", sessionStorage.getItem("User_rol"))
}
createApp(App).use(store).use(router).mount('#app')