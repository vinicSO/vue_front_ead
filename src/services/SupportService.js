import BasicService from "./BasicService";

export default class SupportService extends BasicService {

    static async getSupportsByLesson (lesson_id) {

        return new Promise((resolve, reject) => {

            this.request({auth:true})
                .get('/supports', {
                    params: {lesson: lesson_id}
                })
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }
}