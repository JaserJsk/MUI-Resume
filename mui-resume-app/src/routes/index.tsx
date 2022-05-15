import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import MainLayout from 'layout/MainLayout';

// routes
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import AdminRoutes from './AdminRoutes';
import Loadable from 'components/Loadable';

const PagesLanding = Loadable(lazy(() => import('views/pages/landing')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <PagesLanding /> }],
    },
    MainRoutes,
    AuthRoutes,
    AdminRoutes,
  ]);
}
