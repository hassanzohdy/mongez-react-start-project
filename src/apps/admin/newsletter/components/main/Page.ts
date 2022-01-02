import form from './Form';
import service from 'apps/admin/newsletter/services/service';
import {tableActions, wizardTable, CrudOptions} from 'mongez/table';

const options: CrudOptions = {
    service,
    role: 'newsletter',
    formOptions: {
        form,
        modalOptions: {
            fullScreen: true
        },
        singleName: 'newsletterSingle',
    },
    table: {
        heading: 'newsletter',
        columns: [
            {
                heading: '#',
                key: 'id',
            },
            {
                heading: 'title',
                key: 'title',
            },
            tableActions,
        ],
    }
};

const campaigns = wizardTable(options);

export default campaigns;