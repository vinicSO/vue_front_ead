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
}