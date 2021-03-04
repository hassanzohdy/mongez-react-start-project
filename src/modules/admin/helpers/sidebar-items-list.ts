import {
  trans
} from 'mongez/localization';
import {
  sidebarItems
} from 'mongez/admin';
import ExplicitIcon from '@material-ui/icons/Explicit';
import {
  DashboardRounded,
  VerifiedUser,
  SupervisedUserCircle,
  LibraryBooks,
  Settings
} from '@material-ui/icons';
// icons-list

sidebarItems.onUpdate(() => ([{
  text: trans('dashboard'),
  route: '/',
  icon: DashboardRounded,
  // role: 'homeReport',
},
{
  text: trans('pages'),
  route: '/pages',
  icon: ExplicitIcon,
  role: 'pages.list',
},
{
  text: trans('contactUs'),
  route: '/contact-us',
  icon: LibraryBooks,
  role: 'contactUs.list',
},
{
  text: trans('settings'),
  route: '/settings',
  icon: Settings,
  role: 'settings.list',
},
{
  text: trans('users'),
  icon: VerifiedUser,
  items: [{
    text: trans('users'),
    route: '/users',
    icon: SupervisedUserCircle,
    role: 'users.list',
  },
  {
    text: trans('usersGroups'),
    route: '/users/groups',
    icon: SupervisedUserCircle,
    role: 'usersGroups.list',
  },
  ]
},
  // sidebar-items
]));