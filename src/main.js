import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

if (sessionStorage.length === 0) {
    sessionStorage.setItem("islogged", false)
    sessionStorage.setItem("User_id", "")
    sessionStorage.setItem("User_username", "")
    sessionStorage.setItem("User_rol", "")
    sessionStorage.setItem("InitialState", true)
} else {
    if (store.getters.getInitialState) {
        store.commit("setLogged", sessionStorage.getItem("islogged"))
        store.commit("setIdUsername", sessionStorage.getItem("User_id"))
        store.commit("setUsername", sessionStorage.getItem("User_username"))
        store.commit("setUserRol", sessionStorage.getItem("User_rol"))
            //store.commit("InitialState", false)
    }
}
createApp(App).use(store).use(router).mount('#app')