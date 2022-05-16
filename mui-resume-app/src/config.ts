// Types
import { ConfigProps } from 'types/config';

export const JWT_API = {
  secret: 'SECRET-KEY',
  timeout: '1 days',
};

// Project Settings -> Your Apps -> [Add New Webapp] -> configuration
export const FIREBASE_API = {
  apiKey: 'AIzaSyAn4QCrq3ef6mzw6_s05use9Ajf25iVVRA',
  authDomain: 'mui-resume-app-reactjs.firebaseapp.com',
  projectId: 'mui-resume-app-reactjs',
  storageBucket: 'mui-resume-app-reactjs.appspot.com',
  messagingSenderId: '640694097765',
  appId: '1:640694097765:web:36ad425632e369487cb38c',
  measurementId: 'G-2FYPGLR390',
};

export const AUTH0_API = {
  client_id: 'CLIENT ID',
  domain: 'DOMAIN',
};

export const AWS_API = {
  poolId: 'POOL ID',
  appClientId: 'APP CLIENT ID',
};

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// like '/mui-resume/react/default'
export const BASE_PATH = '';

export const DASHBOARD_PATH = '/dashboard/account';

const config: ConfigProps = {
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 8,
  outlinedFilled: true,
  navType: 'light',
  presetColor: 'default',
  locale: 'en',
  rtlLayout: false,
  container: false,
};

export default config;
