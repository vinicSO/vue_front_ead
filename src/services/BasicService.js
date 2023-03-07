import Http from "./Http.init"

export default class BasicService {

    constructor () {
        
        this.instance = new BasicService
    }

    static request (status = { auth: false}) {
        
        return new Http(status)
    }
}