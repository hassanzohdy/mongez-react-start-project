import { Obj } from 'reinforcements';
import { DashboardLayout } from 'mongez/admin';
import router, { GroupOptions } from 'mongez/router';
import Guardian from 'modules/admin/users/middleware/guardian';
import PermissionGranted from 'modules/admin/users/middleware/PermissionGranted';

export default function adminRoutes(groupOptions) {
    router.group(Obj.merge({
        middleware: [Guardian, PermissionGranted],
        layout: DashboardLayout,
    }, groupOptions) as GroupOptions);
}