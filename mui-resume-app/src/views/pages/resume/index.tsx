// material-ui
import { styled } from '@mui/material/styles';

// project imports
import AppBar from 'components/extended/AppBar';
import Header from './Header';
import Content from './content';
import Footer from './Footer';
import Customization from 'layout/Customization';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 20,
  overflowX: 'hidden',
  overflowY: 'clip',
  [theme.breakpoints.down('md')]: {
    paddingTop: 10,
  },
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  paddingTop: 10,
  [theme.breakpoints.down('md')]: {
    paddingTop: 5,
  },
}));

// =============================|| RESUME INDEX ||============================= //

const Resume = () => (
  <>
    <HeaderWrapper id="home">
      <AppBar />
      <Header />
    </HeaderWrapper>
    <ContentWrapper>
      <Content />
    </ContentWrapper>
    <Footer />
    <Customization />
  </>
);

export default Resume;
