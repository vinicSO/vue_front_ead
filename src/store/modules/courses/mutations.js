const mutations = {
    ADD_COURSES (state, courses) {
        state.courses = courses
    },

    SET_COURSE_SELECTED (state, course) {
        state.courseSelected = course
    },

    SET_LESSON_PLAYER (state, lesson) {
        state.lessonPlayer = lesson
    },

    REMOVE_LESSON_PLAYER (state) {
        state.lessonPlayer = {
            id: '',
            name: '',
            description: '',
            video: '',
            views: []
        }
    },

    MARK_VIEWED_LESSON (state) {
        const modules = state.courseSelected.modules

        modules.forEach((module) => {
            module.lessons.forEach((lesson) => {
                if (lesson.id === state.lessonPlayer.id) {
                    lesson.views.push({})
                }
            })
        });
    }
}

export default mutations