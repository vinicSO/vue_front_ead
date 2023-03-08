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

    static async storeSupport (params) {
        
        return new Promise((resolve, reject) => {

            this.request({auth:true})
                .post('/supports', params)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }

    static async storeReply (params) {

        return new Promise((resolve, reject) => {

            this.request({auth:true})
                .post('/replies', params)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }
}