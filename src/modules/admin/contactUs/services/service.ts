import { RestfulEndpoint } from "mongez/http";

class Service extends RestfulEndpoint {
    route = '/contact-us';

    reply(id, form) {
        return this.endpoint.post(this.path(`/${id}/reply`), form);
    }
}

const service = new Service();

export default service;