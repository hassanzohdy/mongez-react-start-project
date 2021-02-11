import './helpers/style';
import user from 'shared/user';
import './helpers/admin-config';
import './helpers/permissions';
import { AxiosResponse } from 'axios';
import './helpers/sidebar-items-list';
import { navigateTo } from 'mongez/router';
import { endpointEvents } from 'mongez/http';
import { permissionsObserver } from 'mongez/admin';

// should be removed when permissions is set
permissionsObserver.deactivate();

endpointEvents.onSuccess((response: AxiosResponse) => {
    if (response.data.data) {
        response.data = response.data.data;
    }

    if (response.data.user) {
        user.update(response.data.user);
        user.setPermissions(user.get('group.permissions'));
    }
});

endpointEvents.onError((response: AxiosResponse) => {
    if (!response) return;
    // unauthenticated request
    if ([401, 422].includes(response.status) && user.isLoggedIn()) {
        user.logout();

        navigateTo('/login');
    }
});