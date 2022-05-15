// Material UI
import { Link, Typography, Stack } from '@mui/material';

// Third Party
import { FormattedMessage } from 'react-intl';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography
      variant="subtitle2"
      component={Link}
      href="https://reactjs.org/"
      target="_blank"
      underline="hover"
    >
      <FormattedMessage id="react_typescript" />
    </Typography>
    <Typography
      variant="subtitle2"
      component={Link}
      href="https://senseidev.com"
      target="_blank"
      underline="hover"
    >
      <FormattedMessage id="copy_right" />
    </Typography>
  </Stack>
);

export default AuthFooter;
