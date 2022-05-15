import { lazy } from 'react';

// Project Imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';

const Resume = Loadable(lazy(() => import('views/pages/resume')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/resume',
      element: <Resume />,
    },
  ],
};

export default MainRoutes;
