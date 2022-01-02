import { RestfulEndpoint } from "mongez/http";

class PagesService extends RestfulEndpoint {
    route = '/pages';
}

const pagesService: RestfulEndpoint = new PagesService();

export default pagesService;