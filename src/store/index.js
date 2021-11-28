import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        user: {
            username: "",
            login: true,
            rol: "",
        }
    },
    mutations: {
        setTypeRoles(state, rol) {
            state.user.rol = rol;
        },
        setLogined(state) {
            return state.user.login;
        }
    },
    actions: {},
    modules: {},
    getters: {
        typeRoles(state) {
            return state.user.rol;
        },
        isLogined(state) {
            return state.user.login;
        }
    }
});
export default store