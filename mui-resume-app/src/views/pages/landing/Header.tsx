import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme /* , styled */ } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

// third party
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';

// project imports
import Avatar from 'components/extended/Avatar';
import AnimateButton from 'components/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
/*
import dashboard from 'assets/images/landing/dashboard.png';
import widget1 from 'assets/images/landing/widget-1.png';
import widget2 from 'assets/images/landing/widget-2.png';
*/

// styles
/*
const HeaderImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  borderRadius: '20px',
  transform: 'scale(1.7)',
  transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
  [theme.breakpoints.down('lg')]: {
    transform: 'scale(1.2)',
  },
}));

const HeaderAnimationImage = styled('img')({
  maxWidth: '100%',
  filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))',
});
*/

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderPage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={gridSpacing}
        sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
      >
        <Grid item xs={12} md={5}>
          <Grid
            container
            spacing={gridSpacing}
            sx={{
              pr: 10,
              [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' },
            }}
          >
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '3rem', md: '4rem' },
                    fontWeight: 900,
                    lineHeight: 1.4,
                  }}
                >
                  <FormattedMessage id="starter" />
                  <Box
                    component="span"
                    sx={{ ml: 2, color: theme.palette.primary.main }}
                  >
                    <FormattedMessage id="react_typescript" />
                  </Box>
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2,
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  color="inherit"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    fontWeight: 400,
                    lineHeight: 1.4,
                  }}
                >
                  <FormattedMessage id="starter_desc" />
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} sx={{ my: 3.25 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4,
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
                >
                  <Grid item>
                    <AnimateButton>
                      <Button
                        component={RouterLink}
                        to="/dashboard/default"
                        target="_blank"
                        size="large"
                        variant="contained"
                        color="secondary"
                      >
                        <FormattedMessage id="enter_dashboard" />
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.6,
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  spacing={2}
                  sx={{
                    [theme.breakpoints.down('lg')]: {
                      display: 'inline-flex',
                      width: 'auto',
                    },
                  }}
                >
                  <Grid item>
                    <Avatar
                      alt="MUI Logo"
                      color="primary"
                      sx={{
                        width: 50,
                        height: 50,
                        padding: 0.5,
                        background:
                          theme.palette.mode === 'dark'
                            ? theme.palette.dark.light
                            : theme.palette.primary.light,
                      }}
                      variant="rounded"
                    >
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 500 500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z"
                            fill={theme.palette.primary[800]}
                          />
                          <path
                            d="M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z"
                            fill={theme.palette.primary.main}
                          />
                          <path
                            d="M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z"
                            fill={theme.palette.primary[800]}
                          />
                          <path
                            d="M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z"
                            fill={theme.palette.primary.main}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="300"
                              height="238.3"
                              fill="white"
                              transform="translate(100 131)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography
                      variant="h4"
                      component="div"
                      color="inherit"
                      sx={{ fontWeight: 400, lineHeight: 1.4 }}
                    >
                      <b>
                        <FormattedMessage id="powered_by" />
                      </b>
                      <FormattedMessage id="component_lib" />
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeaderPage;
