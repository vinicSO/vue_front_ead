import SupportService from "@/services/SupportService"

const actions = {
    getSupportsByLesson ({commit}, lesson_id) {
        return SupportService.getSupportsByLesson(lesson_id)
            .then(supports => commit('SET_SUPPORTS', supports))
    },

    createSupport ({commit}, params) {
        return SupportService.storeSupport(params)
            .then(response => commit('ADD_NEW_SUPPORT', response.data))
    },

    createReply ({commit}, params) {
        return SupportService.storeReply(params)
            .then(response => {

                const data = {
                    reply: response.data,
                    supportId: params.support
                }

                commit('ADD_NEW_REPLY_TO_SUPPORT', data)
            }
        )
    },

    getMySupports ({commit}, status) {
        return SupportService.getMySupports(status)
            .then(supports => commit('SET_SUPPORTS', supports))
    }
}

export default actions