import SupportService from "@/services/SupportService"

const actions = {
    getSupportsByLesson ({commit}, lesson_id) {
        return SupportService.getSupportsByLesson(lesson_id)
            .then(supports => commit('SET_SUPPORTS', supports))
    }
}

export default actions