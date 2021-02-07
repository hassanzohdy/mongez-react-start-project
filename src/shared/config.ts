import config from 'mongez/config';
import SA from 'assets/images/flags/sa.png';
import UK from 'assets/images/flags/uk.png';

export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

config.set({
    // Services Configurations
    endpoint: {
        apiKey: process.env.REACT_APP_API_KEY,
    },
    locales: {
        ar: {
            name: 'العربية',
            direction: 'rtl',
            flag: SA,
        },
        en: {
            direction: 'ltr',
            name: 'English',
            flag: UK,
        },
    },
});