// Material UI
import { styled } from '@mui/material/styles';

// ==============================|| AUTH WRAPPER ||============================== //

const AuthWrapper = styled('div')(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.dark.main
      : theme.palette.primary.light,
  minHeight: '100vh',
  [theme.breakpoints.down('lg')]: {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.dark.main
        : theme.palette.primary.light,
  },
}));

export default AuthWrapper;
