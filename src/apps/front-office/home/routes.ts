import Home from './components/Home';
import { AccessDenied } from 'mongez/layout';

import frontRoutes from './../helpers/front-routes';

frontRoutes([{
    path: '/',
    component: Home,
}, {
    path: '/access-denied',
    component: AccessDenied,
}]);