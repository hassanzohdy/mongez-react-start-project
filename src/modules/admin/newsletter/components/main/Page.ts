import form from './Form';
import service from 'modules/admin/newsletter/services/service';
import {tableActions, crudPage, CrudOptions} from 'mongez/admin';

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

const campaigns = crudPage(options);

export default campaigns;