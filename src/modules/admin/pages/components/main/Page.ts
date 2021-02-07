import user from 'shared/user';
import form from './Form';
import { LinkFormatter } from 'mongez/table';
import service from 'modules/admin/pages/services/service';
import { crudPage, CrudOptions, tableActions } from 'mongez/admin';

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

const pages = crudPage(options);

export default pages;