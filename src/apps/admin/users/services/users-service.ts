import { RestfulEndpoint } from "mongez/http";

class UsersService extends RestfulEndpoint {
    route = '/users';
}

export default new UsersService();