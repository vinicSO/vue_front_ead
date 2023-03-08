const mutations = {
    SET_SUPPORTS (state, supports) {
        state.supports = Object.assign({}, state.suports, supports)
    },

    ADD_NEW_SUPPORT (state, support) {
        state.supports.data.unshift(support)
    },

    RESET_SUPPORTS (state) {
        state.supports = {
            data: [],
            meta: {
                total: 0,
                page: 0,
                last_page: 0
            }
        }
    }
}

export default mutations