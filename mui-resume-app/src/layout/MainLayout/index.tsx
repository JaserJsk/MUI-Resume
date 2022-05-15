import { Outlet } from 'react-router-dom';

// Material UI
import { styled } from '@mui/material/styles';

// Material UI
import { Container } from '@mui/material';

// Project Imports
import AppBar from 'components/extended/AppBar';
import Breadcrumbs from 'components/extended/Breadcrumbs';
import Footer from 'components/extended/Footer';
import Customization from '../Customization';
import navigation from 'menus/main';

// Assets
import { IconChevronRight } from '@tabler/icons';

const Wrapper = styled('div')(({ theme }) => ({
  paddingTop: 20,
  overflowX: 'hidden',
  overflowY: 'clip',
  [theme.breakpoints.down('md')]: {
    paddingTop: 10,
  },
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.dark.main
      : theme.palette.primary.light,
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => (
  <>
    <Wrapper>
      <AppBar />
      <Container sx={{ mt: 20, mb: { xs: 2.5, md: 10 } }}>
        <Breadcrumbs
          separator={IconChevronRight}
          navigation={navigation}
          icon
          title
          rightAlign
        />
        <Outlet />
      </Container>
      <Footer />
      <Customization />
    </Wrapper>
  </>
);

export default MainLayout;
