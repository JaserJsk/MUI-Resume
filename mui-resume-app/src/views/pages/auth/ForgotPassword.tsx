import { Link } from 'react-router-dom';

// Material UI
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material';

// Third Party
import { FormattedMessage } from 'react-intl';

// Project Imports
import AuthWrapper from './wrappers/AuthWrapper';
import AuthCardWrapper from './wrappers/AuthCardWrapper';
import Logo from 'components/Logo';
import AuthForgotPassword from './forms/ForgotPassword';
import AuthFooter from 'components/cards/AuthFooter';
import useAuth from 'hooks/useAuth';

// ============================|| AUTH - FORGOT PASSWORD ||============================ //

const ForgotPassword = () => {
  const theme = useTheme();
  const { isLoggedIn } = useAuth();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AuthWrapper>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: 'calc(100vh - 68px)' }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item sx={{ mb: 3 }}>
                    <Link to="#">
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="center"
                      textAlign="center"
                      spacing={2}
                    >
                      <Grid item xs={12}>
                        <Typography
                          color={theme.palette.secondary.main}
                          gutterBottom
                          variant={matchDownSM ? 'h3' : 'h2'}
                        >
                          <FormattedMessage id="forgot_password" />
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant="caption"
                          fontSize="16px"
                          textAlign="center"
                        >
                          <FormattedMessage id="reset_password" />
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AuthForgotPassword />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      item
                      container
                      direction="column"
                      alignItems="center"
                      xs={12}
                    >
                      <Typography
                        component={Link}
                        to={isLoggedIn ? '/pages/login/login3' : '/login'}
                        variant="subtitle1"
                        sx={{ textDecoration: 'none' }}
                      >
                        <FormattedMessage id="have_account" />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default ForgotPassword;
