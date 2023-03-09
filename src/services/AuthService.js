import { TOKEN_NAME } from "@/config";
import BasicService from "./BasicService";

export default class AuthService extends BasicService {

    static async auth (params) {

        return new Promise((resolve, reject) => {

            this.request()
                .post('/auth', params)
                .then(response => {
                    
                    localStorage.setItem(TOKEN_NAME, response.data.token)

                    resolve(response)
                })
                .catch(error => reject(error.response))
        })
    }

    static async getUserAuth () {

        const token = await localStorage.getItem(TOKEN_NAME)

        if (!token) {
            return Promise.reject('Token not found')
        }

        return new Promise((resolve, reject) => {

            this.request({auth: true})  
                .post('/me')
                .then(response => resolve(response))
                .catch(error => {
                    localStorage.removeItem(TOKEN_NAME)

                    reject(error.response)}
                )
        })
    }

    static async logout (params) {

        return new Promise((resolve, reject) => {

            this.request({auth: true})
                .post('/logout', params)
                .then(() => {
                    localStorage.removeItem(TOKEN_NAME)

                    resolve('ok')
                })
                .catch(error => reject(error.response))
        })
    }
}