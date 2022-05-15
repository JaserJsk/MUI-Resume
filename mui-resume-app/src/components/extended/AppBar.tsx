import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Material UI
import { useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';

// Third Party
import { FormattedMessage } from 'react-intl';

// Project Imports
import Logo from 'components/Logo';
import useAuth from 'hooks/useAuth';

// Assets
import {
  IconHome,
  IconClipboard,
  IconDashboard,
  IconBook,
} from '@tabler/icons';
import MenuIcon from '@mui/icons-material/Menu';

// elevation scroll
interface ElevationScrollProps {
  children: ReactElement;
  window?: Window | Node;
}
function ElevationScroll({ children, window }: ElevationScrollProps) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window!,
  });
  const darkBorder =
    theme.palette.mode === 'dark'
      ? theme.palette.dark.dark
      : theme.palette.grey[200];

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: {
      backgroundColor:
        theme.palette.mode === 'dark'
          ? theme.palette.dark.main
          : theme.palette.primary.light,
      borderBottom: trigger ? 'none' : '0px solid',
      borderColor: trigger ? '' : darkBorder,
      color: theme.palette.text.dark,
    },
  });
}

// ==============================|| MAIN LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
  const { user } = useAuth();

  const [drawerToggle, setDrawerToggle] = React.useState<boolean>(false);
  /** Method called on multiple components with different event types */
  const drawerToggler = (open: boolean) => (event: any) => {
    if (
      event.type! === 'keydown' &&
      (event.key! === 'Tab' || event.key! === 'Shift')
    ) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container>
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              <Logo />
            </Typography>
            <Stack
              direction="row"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              spacing={2}
            >
              <Button color="inherit" component={Link} href="/">
                <FormattedMessage id="home" />
              </Button>
              <Button color="inherit" component={Link} href="/resume">
                <FormattedMessage id="resume" />
              </Button>
              <Button color="inherit" component={RouterLink} to="/login">
                {user?.id != null ? (
                  <FormattedMessage id="dashboard" />
                ) : (
                  <FormattedMessage id="signin" />
                )}
              </Button>
              <Button
                component={Link}
                disableElevation
                variant="contained"
                color="secondary"
                href="https://www.linkedin.com/in/jaser-jsk/"
                target="_blank"
              >
                <FormattedMessage id="linkedin" />
              </Button>
            </Stack>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton
                color="inherit"
                onClick={drawerToggler(true)}
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={drawerToggler(false)}
              >
                {drawerToggle && (
                  <Box
                    sx={{ width: 'auto' }}
                    role="presentation"
                    onClick={drawerToggler(false)}
                    onKeyDown={drawerToggler(false)}
                  >
                    <List>
                      <Link style={{ textDecoration: 'none' }} href="/">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconHome />
                          </ListItemIcon>
                          <ListItemText
                            primary={<FormattedMessage id="home" />}
                          />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="/resume">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconClipboard />
                          </ListItemIcon>
                          <ListItemText
                            primary={<FormattedMessage id="resume" />}
                          />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="/login">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconDashboard />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              user?.id != null ? (
                                <FormattedMessage id="dashboard" />
                              ) : (
                                <FormattedMessage id="signin" />
                              )
                            }
                          />
                        </ListItemButton>
                      </Link>
                      <Link
                        style={{ textDecoration: 'none' }}
                        href="https://www.linkedin.com/in/jaser-jsk/"
                        target="_blank"
                      >
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconBook />
                          </ListItemIcon>
                          <FormattedMessage id="linkedin" />
                        </ListItemButton>
                      </Link>
                    </List>
                  </Box>
                )}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
