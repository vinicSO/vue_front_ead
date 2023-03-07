import BasicService from "./BasicService";

export default class CourseService extends BasicService {

    static async getAll (params) {

        return new Promise((resolve, reject) => {

            this.request({auth:true})
                .post('/courses', params)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response))
        })
    }
}