import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        api: {
            //name: "http://localhost:8081/",
            name: "https://proyectocreditosfrontend.000webhostapp.com/",
            key: "3aebc6817c43ee5433194c9c2138cd72",
        },
        login: {
            islogged: sessionStorage.getItem("islogged"),
            User_id: sessionStorage.getItem("User_id"),
            User_username: sessionStorage.getItem("User_username"),
            User_rol: sessionStorage.getItem("User_rol"),
            InitialState: sessionStorage.getItem("InitialState"),
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
        setUserRol(state, User_rol) {
            state.login.User_rol = User_rol;
            sessionStorage.setItem("User_rol", User_rol)
        },
        setInitialState(state, InitialState) {
            state.login.InitialState = InitialState;
            sessionStorage.setItem("InitialState", InitialState)
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
        getInitialState(state) {
            return state.login.InitialState;
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
        }
    }
});
export default store