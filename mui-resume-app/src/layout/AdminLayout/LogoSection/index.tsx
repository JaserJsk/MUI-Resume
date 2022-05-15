import { Link as RouterLink } from 'react-router-dom';

// Material UI
import { Link } from '@mui/material';

// Project Imports
import { DASHBOARD_PATH } from 'config';
import Logo from 'components/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
  <Link component={RouterLink} to={DASHBOARD_PATH}>
    <Logo />
  </Link>
);

export default LogoSection;
