import AuthService from "@/services/AuthService"
import ResetPasswordService from "@/services/ResetPasswordService"

export default {
    state: {
        user: {
            name: '',
            email: '',
        },
        loggedIn: false,
    },

    mutations: {
        SET_USER (state, user) {
            state.user = user
            state.loggedIn = true
        },
        LOGOUT (state) {
            state.user = {
                name: '',
                email: ''
            }

            state.loggedIn = false
        }
    },

    actions: {
        auth ({ state, dispatch }, params) {
            state.loggedIn
            return AuthService.auth(params)
                .then(() => dispatch('getUserAuth'))
        },
        forgotPassword({ state }, params) {
            state.loggedIn
            return ResetPasswordService.forgotPassword(params)
        },
        getUserAuth ({commit}) {
            commit('TOGGLE_LOADING', true)

            AuthService.getUserAuth()
                .then(response => commit('SET_USER', response.data))
                .finally(() => commit('TOGGLE_LOADING', false))
        }
    }
}