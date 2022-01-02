import service from 'apps/admin/newsletter/services/subscriptions-service';
import {tableActions, wizardTable, CrudOptions} from 'mongez/table';

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

const campaigns = wizardTable(options);

export default campaigns;