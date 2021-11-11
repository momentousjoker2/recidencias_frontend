import { createStore } from 'vuex'

export default createStore({
    state: {
        rol: "Cordinador"
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        typeRoles(state) {
            return state.rol;
        }
    }
})