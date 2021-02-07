import UserGroupForm from './user-group-form';
import {tableActions, crudPage, CrudOptions} from 'mongez/admin';
import usersGroupsService from 'modules/admin/users/services/users-groups-service';

const options: CrudOptions = {
    service: usersGroupsService,
    role: 'usersGroups',
    formOptions: {
        form: UserGroupForm,
        singleName: 'usersGroup',
    },
    table: {
        heading: 'usersGroups',
        columns: [
            {
                heading: '#',
                key: 'id',
            },
            {
                heading: 'name',
                key: 'name',
            },
            tableActions,
        ],
    }
};

const UsersGroups = crudPage(options);

export default UsersGroups;