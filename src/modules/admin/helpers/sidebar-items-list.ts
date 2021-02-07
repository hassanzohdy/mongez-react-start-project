import {
  trans
} from 'mongez/localization';
import {
  sidebarItems
} from 'mongez/admin';
import Album from '@material-ui/icons/Album';
import Videocam from '@material-ui/icons/Videocam';
import LockOpen from '@material-ui/icons/LockOpen';
import MessageIcon from '@material-ui/icons/Message';
import ExplicitIcon from '@material-ui/icons/Explicit';
import SpeakerGroup from '@material-ui/icons/SpeakerGroup';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver';
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
  text: trans('talents'),
  icon: Album,
  items: [{
    text: trans('talents'),
    route: '/talents',
    icon: Album,
    role: 'talents.list',
  },
  {
    text: trans('talentsActivities'),
    route: '/talents/activities',
    icon: Album,
    role: 'talentsActivities.list',
  },
  ]
},
{
  text: trans('crew'),
  route: '/crew',
  icon: RecordVoiceOver,
  role: 'crew.list',
},
{
  text: trans('packages'),
  route: '/packages',
  icon: MonetizationOn,
  role: 'packages.list',
},
{
  text: trans('characterAttributesGroups'),
  route: '/characterAttributes',
  icon: SpeakerGroup,
  role: 'characterAttributesGroups.list',
},
{
  text: trans('castingCalls'),
  route: '/casting-calls',
  icon: Videocam,
  role: 'casting-calls.list',
},
{
  text: trans('unlocks'),
  route: '/unlocks',
  icon: LockOpen,
  role: 'unlocks.list',
},
{
  text: trans('messages'),
  route: '/messages',
  icon: MessageIcon,
  role: 'messages.list',
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