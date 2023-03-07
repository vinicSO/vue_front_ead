import BasicService from "./BasicService";

export default class AuthService extends BasicService {

    static async auth (params) {

        return this.request({auth: true})
            .post('/auth', params)
    }
}