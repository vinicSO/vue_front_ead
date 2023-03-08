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
    },

    ADD_NEW_REPLY_TO_SUPPORT (state, data) {
        const reply = data.reply
        const supportId = data.supportId

        Object.entries(state.supports.data).forEach(([key, support]) => {
            if (support.id === supportId) state.supports.data[`${key}`].replies.push(reply)
        })
    }
}

export default mutations