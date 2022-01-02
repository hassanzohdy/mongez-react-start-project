import user from 'shared/user';
import form from './Form';
import service from 'apps/admin/pages/services/service';
import { LinkFormatter, wizardTable, CrudOptions, tableActions } from 'mongez/table';

const options: CrudOptions = {
    service,
    role: 'pages',
    permissions: {
        add: user.get('id') === 1,
        // add: false,
        delete: false,
        list: true,
        edit: true,
    },
    formOptions: {
        form,
        singleName: 'page',
        modalOptions: {
            fullScreen: true
        }
    },
    table: {
        heading: 'pages',
        columns: [
            {
                heading: '#',
                key: 'id',
            },
            {
                heading: 'title',
                key: 'title',
                formatter: LinkFormatter,
                settings: {
                    href: record => `/page/${record.slug}`,
                    target: '_blank',
                    baseApp: '/',
                }
            },
            tableActions,
        ],
    }
};

const pages = wizardTable(options);

export default pages;