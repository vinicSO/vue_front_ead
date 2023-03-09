import BasicService from "./BasicService";

export default class CourseService extends BasicService {

    static async getCourses () {

        return new Promise((resolve, reject) => {

            this.request({auth:true})
                .get('/courses')
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }

    static async markLessonViewed (lesson_id) {

        return new Promise((resolve, reject) => {

            this.request({auth:true})
                .post('/lessons/viewed', {
                    lesson: lesson_id
                })
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }
}