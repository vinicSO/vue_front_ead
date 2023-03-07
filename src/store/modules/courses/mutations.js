const mutations = {
    ADD_COURSES (state, courses) {
        state.courses = courses
    },

    SET_COURSE_SELECTED (state, course) {
        state.courseSelected = course
    }
}

export default mutations