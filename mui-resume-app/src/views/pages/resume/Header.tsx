import { useTheme, styled } from '@mui/material/styles';
import {
  Container,
  Grid,
  Typography,
  CardContent,
  CardHeader,
  Card,
} from '@mui/material';

// Data
import UserData from 'Mock/user.json';
import CompetenceData from 'Mock/competence.json';

// Third Party
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

// Project Imports
import { gridSpacing } from 'store/constant';
import UserProfile from 'views/pages/resume/header/UserProfile';
import AboutMe from 'views/pages/resume/header/AboutMe';
import PersonalInfo from 'views/pages/resume/header/PersonalInfo';
import Languages from 'views/pages/resume/header/Languages';

// ==============================|| RESUME - HEADER ||============================== //

const HeaderPage = () => {
  const theme = useTheme();

  const CardStyled = styled(Card)({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.dark.main
        : theme.palette.grey[50],
  });

  return (
    <Container>
      <Grid
        container
        justifyContent="space-between"
        spacing={gridSpacing}
        sx={{ mt: { xs: 10, sm: 6, md: 15 } }}
      >
        {/* ======================================================= */}
        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0, translateX: -550 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
            }}
          >
            <CardStyled sx={{ boxShadow: 8, textAlign: 'center' }}>
              <CardContent sx={{ p: 2, pb: '16px !important' }}>
                {UserData.map((user, key) => (
                  <UserProfile
                    key={key}
                    name={user.name}
                    title={user.title}
                    hunting={user.hunting}
                    avatar={user.avatar}
                  />
                ))}
              </CardContent>
            </CardStyled>
          </motion.div>
        </Grid>
        {/* ======================================================= */}
        <Grid item xs={12} md={9}>
          <motion.div
            initial={{ opacity: 0, translateX: 550 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
            }}
          >
            <CardStyled sx={{ boxShadow: 8 }}>
              <CardHeader
                title={
                  <Typography
                    variant="h3"
                    style={{ textTransform: 'uppercase' }}
                  >
                    <FormattedMessage id="about_me" />
                  </Typography>
                }
              />
              <CardContent>
                <Grid container spacing={1} sx={{ mb: 3.5 }}>
                  <Grid item>
                    {UserData.map((user, key) => (
                      <AboutMe key={key} about_me={user.about_me} />
                    ))}
                  </Grid>
                </Grid>
                <Grid container spacing={1} sx={{ mt: 3 }}>
                  {/* ======================================================= */}
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="h3"
                      style={{ textTransform: 'uppercase' }}
                    >
                      <FormattedMessage id="personal_info" />
                    </Typography>
                    {UserData.map((user, key) => (
                      <PersonalInfo
                        key={key}
                        name={user.name}
                        dob={user.dob}
                        address={user.address}
                        email={user.email}
                        phone={user.phone}
                        freelance={user.freelance}
                      />
                    ))}
                  </Grid>
                  {/* ======================================================= */}
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="h3"
                      style={{ textTransform: 'uppercase' }}
                    >
                      <FormattedMessage id="languages" />
                    </Typography>
                    {CompetenceData.language.map((lang, key) => (
                      <Languages
                        key={key}
                        skill_name={lang.skill_name}
                        skill_level={lang.skill_level}
                      />
                    ))}
                  </Grid>
                </Grid>
              </CardContent>
            </CardStyled>
          </motion.div>
        </Grid>
        {/* ======================================================= */}
      </Grid>
    </Container>
  );
};

export default HeaderPage;
