import { permissionsObserver } from 'mongez/admin';
import { trans } from 'mongez/localization';
import { getCurrentUser, crud, viewableCrud, ignoreRolesFromCrud } from 'mongez/user';

const user = getCurrentUser();

user.setPermissions(user.get('group.permissions'));

// permissions.disable();

const campaigns = ignoreRolesFromCrud(crud('campaigns', 'campaign'), ['edit']);
const newsletter = ignoreRolesFromCrud(crud('newsletter', 'newsletterSingle'), ['edit']);
const subscriptions = ignoreRolesFromCrud(crud('subscriptions', 'subscription'), ['add', 'edit']);
const contactUs = ignoreRolesFromCrud(crud('contactUs', 'message', [{
    text: trans('reply'),
    name: 'reply',
}]), ['add', 'edit']);

const settings = {
    text: trans('settings'),
    name: 'settings',
    roles: [
        {
            text: trans('listItems', trans('settings')),
            name: 'list',
        },
        {
            text: trans('editItem', trans('settings')),
            name: 'update',
        },
    ]
}

const permissionsList = [
    crud('users', 'user'),
    crud('usersGroups', 'usersGroup'),
    settings,
    crud('pages', 'page'),
    contactUs,
    campaigns,
    newsletter,
    subscriptions,
    viewableCrud('products', 'product'),
    // permissions-list
];

permissionsObserver.set(permissionsList);