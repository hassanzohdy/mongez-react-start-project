import router from 'mongez/router';
import Home from './components/home';
import { AccessDenied } from 'mongez/layout';
import { DashboardLayout } from 'mongez/admin';
import Guardian from 'modules/admin/users/middleware/guardian';

router.partOf(DashboardLayout, [{
    path: '/',
    component: Home,
    middleware: Guardian,
}, {
    path: '/access-denied',
    component: AccessDenied,
}]);