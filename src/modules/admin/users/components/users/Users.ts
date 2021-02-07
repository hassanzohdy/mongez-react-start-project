import UserForm from './user-form';
import { EmailFormatter } from 'mongez/table';
import { tableActions, crudPage, CrudOptions } from 'mongez/admin';
import usersService from 'modules/admin/users/services/users-service';

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

const Users = crudPage(options);

export default Users;