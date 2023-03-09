import CourseService from "@/services/CourseService"

const actions = {
    getCourses ({commit}) {
        CourseService.getCourses()
            .then(response => commit('ADD_COURSES', response.data))
    },

    markLessonViewed ({commit, state}) {
        CourseService.markLessonViewed(state.lessonPlayer.id)
            .then(() => commit('MARK_VIEWED_LESSON'))
    }
}

export default actions