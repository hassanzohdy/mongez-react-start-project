import router from "mongez/router";
import BaseLayout from "../components/BaseLayout";

export default function frontRoutes(routes) {
    router.partOf(BaseLayout, routes);
}

export function guardedRoutes(routes) {
    router.group({
        path: '',
        routes: routes,
        layout: BaseLayout.
        middleware: [],// put your guardian middleware here
    });
}