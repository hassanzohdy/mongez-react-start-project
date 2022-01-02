import config, { ConfigList } from 'mongez/config';
import { BASE_URL } from 'shared/config';
import userLogout from 'apps/admin/users/helpers/user-logout';

const settings: ConfigList = {
    endpoint: {
        baseUrl: BASE_URL + '/admin',
    },
    locales: {
        ar: {
            direction: 'rtl',
            name: 'العربية'
        }
    },
    dashboard: {
        header: {
            locales: false,
            logout: userLogout,
        },
    }
};

config.set(settings);