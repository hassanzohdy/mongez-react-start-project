import { RestfulEndpoint } from "mongez/http";

class Service extends RestfulEndpoint {
    route = '/newsletter/subscriptions';
}

const service = new Service();

export default service;