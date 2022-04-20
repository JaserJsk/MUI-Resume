import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const Resume = Loadable(lazy(() => import('views/pages/resume')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/resume',
      element: <Resume />,
    },
  ],
};

export default AuthenticationRoutes;
