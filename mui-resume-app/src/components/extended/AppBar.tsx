import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
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

// third party
import { FormattedMessage } from 'react-intl';

// project imports
import Logo from 'components/Logo';

// assets
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
      backgroundColor: theme.palette.background.default,
      borderBottom: trigger ? 'none' : '1px solid',
      borderColor: trigger ? '' : darkBorder,
      color: theme.palette.text.dark,
    },
  });
}

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
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
                <FormattedMessage id="dashboard" />
              </Button>
              <Button
                component={Link}
                disableElevation
                variant="contained"
                color="secondary"
                href="https://docs.senseidev.com/docs/"
                target="_blank"
              >
                <FormattedMessage id="documentation" />
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
                            primary={<FormattedMessage id="dashboard" />}
                          />
                        </ListItemButton>
                      </Link>
                      <Link
                        style={{ textDecoration: 'none' }}
                        href="https://docs.senseidev.com/docs/"
                        target="_blank"
                      >
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconBook />
                          </ListItemIcon>
                          <FormattedMessage id="documentation" />
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
