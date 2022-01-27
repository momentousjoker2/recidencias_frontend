import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        user: {
            id: "",
            username: "",
            rol: "",
        },
        sessionDate: {
            isLogin: false,
            date: new Date(),
        },
        api: {
            name: "http://proyectocreditosfrontend.000webhostapp.com/",
            key: "3aebc6817c43ee5433194c9c2138cd72",
        }
    },
    mutations: {
        setTypeRoles(state, rol) {
            state.user.rol = rol;
        },
        setUserRol(state, rol, username) {
            state.user.rol = rol;
            state.user.username = username;
        },
        setLogin(state, isLogin, date) {
            state.sessionDate.isLogin = isLogin;
            state.sessionDate.date = date;
        },

    },
    actions: {},
    modules: {},
    getters: {
        getApiName(state) {
            return state.api.name;
        },
        getApiKey(state) {
            return state.api.key;
        },
        typeRoles(state) {
            return state.user.rol;
        },
        getLogin(state) {
            return state.sessionDate.isLogin;
        }
    }
});
export default store