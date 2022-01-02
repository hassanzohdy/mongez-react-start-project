import SA from 'assets/images/flags/sa.png';
import UK from 'assets/images/flags/uk.png';
import config, { ConfigList } from 'mongez/config';

// Time Ago text
import arStrings from 'react-timeago/lib/language-strings/ar';
import enStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

const arabicFormatter = buildFormatter(arStrings);
const englishFormatter = buildFormatter(enStrings);

export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const settings: ConfigList = {
    langMode: 'array',
    endpoint: {
        baseUrl: process.env.REACT_APP_API_BASE_URL,
        apiKey: process.env.REACT_APP_API_KEY,
    },
    timeAgo: {
        formatters: {
            ar: arabicFormatter,
            en: englishFormatter,
        }
    },
    encryption: {
        // required if you're using encrypted local cache 
        key: process.env.REACT_APP_KEY_NAME,
    },
    cache: {
        prefix: process.env.REACT_APP_KEY_NAME + '-',
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