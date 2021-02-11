import config, { ConfigList } from 'mongez/config';
import { BASE_URL } from 'shared/config';
import userLogout from 'modules/admin/users/helpers/user-logout';

const settings: ConfigList = {
    endpoint: {
        baseUrl: BASE_URL + '/admin',
    },
    locales: {
        en: {
            direction: 'ltr',
        },
        ar: {
            direction: 'rtl',
        },
    },
    dashboard: {
        header: {
            locales: false,
            logout: userLogout,
        },
    }
};

config.set(settings);