import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// dashboard page routing
/*
const DashboardDefault = Loadable(
  lazy(() => import('views/dashboard/Default'))
);
*/

const DashboardAccount = Loadable(
  lazy(() => import('views/dashboard/Account'))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: '/dashboard/account',
      element: <DashboardAccount />,
    },
  ],
};

export default MainRoutes;
