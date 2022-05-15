import { lazy } from 'react';

// Project Imports
import AdminLayout from 'layout/AdminLayout';
import AuthGuard from 'utils/route-guard/AuthGuard';
import Loadable from 'components/Loadable';

const DashboardAccount = Loadable(
  lazy(() => import('views/dashboard/Account'))
);

// ==============================|| ADMIN ROUTING ||============================== //

const AdminRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <AdminLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: '/dashboard/account',
      element: <DashboardAccount />,
    },
  ],
};

export default AdminRoutes;
