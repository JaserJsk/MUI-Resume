// Material UI
import { styled } from '@mui/material/styles';

// Project Imports
import Header from './Header';
import Content from './Content';

const ContentWrapper = styled('div')(({ theme }) => ({
  paddingTop: 160,
  [theme.breakpoints.down('md')]: {
    paddingTop: 60,
  },
}));

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <>
    <Header />
    <ContentWrapper>
      <Content />
    </ContentWrapper>
  </>
);

export default Landing;
