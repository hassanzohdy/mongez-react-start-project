import { setModules, Module } from "mongez/router";

setModules([
  {
    path: '/admin',
    name: 'admin',
    modules: [
      {
        entry: ['/users', '/login'],
        module: 'users',
      },
      {
        entry: ['/settings'],
        module: 'settings',
      },
      {
        entry: ['/pages'],
        module: 'pages',
      },
      {
        entry: ['/contact-us'],
        module: 'contactUs',
      },
      {
        entry: ['/newsletter'],
        module: 'newsletter',
      },
      // admin-modules
      {
        entry: ['/', '/access-denied'],
        module: 'home',
      },
    ]
  },{
    path: '/',
    name: 'front-office',
    modules: [
      // front-office-modules
      {
        entry: ['/', '/access-denied'],
        module: 'home',
      },
    ]
  },
] as Module[]);