// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Link, Typography } from '@mui/material';

// third party
import { FormattedMessage } from 'react-intl';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import logoDark from 'assets/images/logo-white.svg';

// styles
const FooterWrapper = styled('div')(({ theme }) => ({
  padding: '35px 0',
  color: '#fff',
  background: theme.palette.secondary.main,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

const FooterLink = styled(Link)({
  color: '#fff',
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none !important',
  opacity: '0.8',
  '& svg': {
    fontsize: '1.125rem',
    marginRight: 8,
  },
  '&:hover': {
    opacity: '1',
  },
});

const FooterSubWrapper = styled('div')(({ theme }) => ({
  padding: '20px 0',
  color: '#fff',
  background: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

// ==============================|| RESUME - FOOTER ||============================== //

const FooterPage = () => {
  const theme = useTheme();
  return (
    <>
      <FooterWrapper>
        <Container>
          <Grid container alignItems="center" spacing={gridSpacing}>
            <Grid item xs={12} sm={4}>
              <img src={logoDark} alt="senseidev" width="170" />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid
                container
                alignItems="center"
                spacing={2}
                sx={{
                  justifyContent: 'flex-end',
                  [theme.breakpoints.down('md')]: { justifyContent: 'center' },
                }}
              >
                <Grid item>
                  <FooterLink
                    href="https://www.facebook.com/"
                    target="_blank"
                    underline="hover"
                  >
                    <FacebookIcon />
                    <FormattedMessage id="facebook" />
                  </FooterLink>
                </Grid>
                <Grid item>
                  <FooterLink
                    href="https://twitter.com/"
                    target="_blank"
                    underline="hover"
                  >
                    <TwitterIcon />
                    <FormattedMessage id="twitter" />
                  </FooterLink>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </FooterWrapper>
      <FooterSubWrapper>
        <Container>
          <Typography variant="subtitle2" component="div" color="inherit">
            <FormattedMessage id="copy_right" />
          </Typography>
        </Container>
      </FooterSubWrapper>
    </>
  );
};

export default FooterPage;
