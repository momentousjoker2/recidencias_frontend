import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        api: {
            name: "http://localhost:8081/",
            //name: "http://10.32.150.91:8081/",
        },
        login: {
            islogged: sessionStorage.getItem("islogged"),
            User_id: sessionStorage.getItem("User_id"),
            User_username: sessionStorage.getItem("User_username"),
            User_rol: sessionStorage.getItem("User_rol"),
            User_depto: sessionStorage.getItem("User_depto"),
        },
    },
    mutations: {
        setLogged(state, islogged) {
            state.login.islogged = islogged;
            sessionStorage.setItem("islogged", islogged);
        },
        setIdUsername(state, User_id) {
            state.login.User_id = User_id;
            sessionStorage.setItem("User_id", User_id);
        },
        setUsername(state, User_username) {
            state.login.User_username = User_username;
            sessionStorage.setItem("User_username", User_username)
        },
        setUserDepto(state, User_depto) {
            state.login.User_depto = User_depto;
            sessionStorage.setItem("User_depto", User_depto)
        },
        setUserRol(state, User_rol) {
            state.login.User_rol = User_rol;
            sessionStorage.setItem("User_rol", User_rol)
        },

    },
    actions: {},
    modules: {},
    getters: {
        getApiName(state) {
            return state.api.name;
        },
        getLogged(state) {
            return state.login.islogged;
        },
        getIdUsername(state) {
            return state.login.User_id;
        },
        getUserName(state) {
            return state.login.User_username;
        },
        getRol(state) {
            return state.login.User_rol;
        },
        getDepto(state) {
            return state.login.User_depto;
        }

    }
});
export default store