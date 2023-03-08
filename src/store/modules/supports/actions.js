import SupportService from "@/services/SupportService"

const actions = {
    getSupportsByLesson ({commit}, lesson_id) {
        return SupportService.getSupportsByLesson(lesson_id)
            .then(supports => commit('SET_SUPPORTS', supports))
    },

    createSupport ({commit}, params) {
        return SupportService.storeSupportService(params)
            .then(response => commit('ADD_NEW_SUPPORT', response.data))
    }
}

export default actions