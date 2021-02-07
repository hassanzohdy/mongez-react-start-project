import config from 'mongez/config';
import { BASE_URL } from 'shared/config';

config.set({
    // Services Configurations
    endpoint: {
        baseUrl: BASE_URL ,
    },
    locales: {
        en: {
            direction: 'ltr',
        },
        ar: {
            direction: 'rtl',
        },
    }
});