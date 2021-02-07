import { RestfulEndpoint } from "mongez/http";

class UsersGroupsService extends RestfulEndpoint {
    route = '/users/groups';
}

export default new UsersGroupsService();