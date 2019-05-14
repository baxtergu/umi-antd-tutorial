export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [{ path: '/user', component: './Welcome' }],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/welcome' },
      // dashboard
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/sample',
        icon: 'block',
        name: 'sample',
        routes: [
          {
            path: '/sample/simpledataflow',
            name: 'simple-data-flow',
            icon: 'block',
            component: './Sample/SimpleDataFlow',
          },
        ],
      },
    ],
  },
];
