import service from 'modules/admin/newsletter/services/subscriptions-service';
import {tableActions, crudPage, CrudOptions} from 'mongez/admin';

const options: CrudOptions = {
    service,
    role: 'subscriptions',
    table: {
        heading: 'subscriptions',
        columns: [
            {
                heading: '#',
                key: 'id',
            },
            {
                heading: 'email',
                key: 'email',
            },
            tableActions,
        ],
    }
};

const campaigns = crudPage(options);

export default campaigns;