import { styleSettings } from "mongez/layout";

export const MAIN_COLOR = process.env.REACT_APP_COLOR;

styleSettings.set({
    colors: {
        primary: MAIN_COLOR,
    },
});