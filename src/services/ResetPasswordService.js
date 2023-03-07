import BasicService from "./BasicService";

export default class ResetPasswordService extends BasicService {

    static async forgotPassword (params) {

        return new Promise((resolve, reject) => {

            this.request()
                .post('/forgot-password', params)
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }

    static async resetPassword (params) {

        return new Promise((resolve, reject) => {

            this.request()
                .post('/reset-password', params)
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }
}