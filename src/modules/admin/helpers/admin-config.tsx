import config from 'mongez/config';
import { BASE_URL } from 'shared/config';
import userLogout from 'modules/admin/users/helpers/user-logout';

config.set({
    // Services Configurations
    // A.K.A Endpoints
    endpoint: {
        baseUrl: BASE_URL + '/admin',
    },
    locales: {
        en: {
            direction: 'ltr',
        },
        ar: {
            direction: 'rtl',
        },
    },
    dashboard: {
        header: {
            locales: false,
            logout: userLogout,
            // notifications: {
            //     total: setTotal => {
            //         setTotal(user.get('notifications'));

            //         user.onChange('notifications', setTotal);
            //     },
            //     removable: true,
            //     removeAll: true,
            //     markAsSeen: true,
            //     markAllAsSeen: true,
            //     service: () => notificationsService,
            //     notificationsResponse: response => response.data.notifications,
            //     panel: NotificationPanel,
            //     createdAt: notification => notification.createdAt.humanTime,
            // }
        },
        sidebar: {
            // heading: props => <Link {...props} to="/">
            //     <Avatar src={logo} alt={trans('appName')} />
            // </Link>,
        }
    }
});