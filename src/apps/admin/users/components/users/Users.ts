import UserForm from './user-form';
import { EmailFormatter } from 'mongez/table';
import { tableActions, wizardTable, CrudOptions } from 'mongez/table';
import usersService from 'apps/admin/users/services/users-service';

const options: CrudOptions = {
    service: usersService,
    role: 'users',
    formOptions: {
        form: UserForm,
        singleName: 'user',
    },
    table: {
        heading: 'users',
        columns: [
            {
                heading: '#',
                key: 'id',
            },
            {
                heading: 'name',
                key: 'name',
            },
            {
                heading: 'group',
                key: 'group.name',
            },
            {
                heading: 'email',
                key: 'email',
                formatter: EmailFormatter,
            },
            tableActions,
        ],
    }
};

const Users = wizardTable(options);

export default Users;