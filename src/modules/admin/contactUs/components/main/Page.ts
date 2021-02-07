import form from './Form';
import ReplyButton from './ReplyButton';
import { crudPage, CrudOptions } from 'mongez/admin';
import service from 'modules/admin/contactUs/services/service';
import { BooleanFormatter, TableDeleteButton, ButtonsFormatter } from 'mongez/table';

const tableActions = {
    heading: 'actions',
    formatter: ButtonsFormatter,
    buttons: [ReplyButton, TableDeleteButton]
};

const options: CrudOptions = {
    service,
    role: 'contactUs',
    permissions: {
        list: true,
        reply: true,
        delete: true,
    },
    formOptions: {
        form,
        singleName: 'reply',
    },
    table: {
        heading: 'contactUs',
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
                heading: 'phone',
                key: 'phone',
            },
            {
                heading: 'email',
                key: 'email',
            },
            {
                heading: 'createdAt',
                key: 'createdAt.format',
            },
            {
                heading: 'replied',
                key: 'replied',
                formatter: BooleanFormatter,
            },
            {
                heading: 'repliedBy',
                key: 'createdBy.name',
            },
            tableActions,
        ],
    }
};

const campaigns = crudPage(options);

export default campaigns;