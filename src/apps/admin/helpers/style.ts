import { styleSettings } from "mongez/layout";
import { MAIN_COLOR } from "shared/style-settings";

const HEADER_BAR_COLOR = '#FFF';
const HEADER_BAR_BACKGROUND_COLOR = MAIN_COLOR;

const SIDEBAR_ITEM_COLOR = MAIN_COLOR;

styleSettings.set({
    colors: {
        primary: MAIN_COLOR,
        secondary: '#333',
        link: MAIN_COLOR,
    },
    fontFamily: {
        en: {
            fontFamily: '"Open Sans"',
            src: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
        },
        ar: {
            fontFamily: 'Cairo',
            src: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap'
        },
    },
    dashboard: {
        sidebar: {
            width: 300,
            sidebarItemColor: SIDEBAR_ITEM_COLOR,
        },
        header: {
            color: HEADER_BAR_COLOR,
            backgroundColor: HEADER_BAR_BACKGROUND_COLOR,
        },
    }
});