import { lazy } from 'react';

// Project Imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import AuthLayout from 'layout/AuthLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'components/Loadable';

// login routing
const AuthLogin = Loadable(lazy(() => import('views/pages/auth/Login')));
const AuthRegister = Loadable(lazy(() => import('views/pages/auth/Register')));
const AuthForgotPassword = Loadable(
  lazy(() => import('views/pages/auth/ForgotPassword'))
);

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes = {
  path: '/',
  element: (
    <NavMotion>
      <GuestGuard>
        <AuthLayout />
      </GuestGuard>
    </NavMotion>
  ),
  children: [
    {
      path: '/login',
      element: <AuthLogin />,
    },
    {
      path: '/register',
      element: <AuthRegister />,
    },
    {
      path: '/forgot',
      element: <AuthForgotPassword />,
    },
  ],
};

export default AuthRoutes;
