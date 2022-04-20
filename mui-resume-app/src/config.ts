// types
import { ConfigProps } from 'types/config';

export const JWT_API = {
  secret: 'SECRET-KEY',
  timeout: '1 days',
};

// Project Settings -> Your Apps -> [Add New Webapp] -> configuration
export const FIREBASE_API = {
  apiKey: 'AIzaSyBntFCanpoTo4ay37VJnhliXlZK6CS5UxE',
  authDomain: 'resume-test-299ba.firebaseapp.com',
  projectId: 'resume-test-299ba',
  storageBucket: 'resume-test-299ba.appspot.com',
  messagingSenderId: '502231618449',
  appId: '1:502231618449:web:c4f4a5ce5a9136dc5dc030',
  measurementId: 'G-6XCP08C5BW',
};

export const AUTH0_API = {
  client_id: '7T4IlWis4DKHSbG8JAye4Ipk0rvXkH9V',
  domain: 'dev-w0-vxep3.us.auth0.com',
};

export const AWS_API = {
  poolId: 'us-east-1_AOfOTXLvD',
  appClientId: '3eau2osduslvb7vks3vsh9t7b0',
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
