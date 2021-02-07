import router from 'mongez/router';
import Home from './components/Home';
import { AccessDenied } from 'mongez/layout';
import BaseLayout from '../components/BaseLayout';

router.partOf(BaseLayout, [{
    path: '/',
    component: Home,
}, {
    path: '/access-denied',
    component: AccessDenied,
}]);