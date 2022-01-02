import UserGroupForm from './user-group-form';
import {tableActions, wizardTable, CrudOptions} from 'mongez/table';
import usersGroupsService from 'apps/admin/users/services/users-groups-service';

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

const UsersGroups = wizardTable(options);

export default UsersGroups;