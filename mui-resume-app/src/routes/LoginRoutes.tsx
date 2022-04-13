import { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'components/Loadable';

// login routing
const AuthLogin = Loadable(lazy(() => import('views/pages/auth/Login')));
const AuthRegister = Loadable(lazy(() => import('views/pages/auth/Register')));
const AuthForgotPassword = Loadable(
  lazy(() => import('views/pages/auth/ForgotPassword'))
);

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: (
    <NavMotion>
      <GuestGuard>
        <MinimalLayout />
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

export default LoginRoutes;
