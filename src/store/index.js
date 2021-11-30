import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        user: {
            username: "",
            rol: "",
        },
        sessionDate: {
            isLogin: true,
            date: new Date(),
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
        typeRoles(state) {
            return state.user.rol;
        },
        getLogin(state) {
            return state.sessionDate.isLogin;
        }
    }
});
export default store