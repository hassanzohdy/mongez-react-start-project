import SA from 'assets/images/flags/sa.png';
import UK from 'assets/images/flags/uk.png';
import config, { ConfigList } from 'mongez/config';

export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const settings: ConfigList = {
    langMode: 'array',
    endpoint: {
        baseUrl: process.env.REACT_APP_API_BASE_URL,
        apiKey: process.env.REACT_APP_API_KEY,
    },
    locales: {
        en: {
            direction: 'ltr',
            name: 'English',
            flag: UK,
        },
        ar: {
            direction: 'rtl',
            name: 'العربية',
            flag: SA,
        },
    },
    form: {
        input: {
            variant: 'outlined',
        }
    },
};

config.set(settings);