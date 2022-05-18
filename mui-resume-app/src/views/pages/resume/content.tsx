// Material UI
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
import WorkData from 'Mock/experience.json';
import EducationData from 'Mock/education.json';
import CompetenceData from 'Mock/competence.json';

// Third Party
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

// Project Imports
import { gridSpacing } from 'store/constant';
import FadeInWhenVisible from 'views/pages/Animation';
import Expertise from 'views/pages/resume/content/Expertise';
import WorkExperience from 'views/pages/resume/content/WorkExperience';
import Education from 'views/pages/resume/content/Education';
import ContactMe from 'views/pages/resume/content/ContactMe';

// ==============================|| RESUME - CONTENT ||============================== //
const ContentPage = () => {
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
        sx={{ mt: { md: 0 }, mb: { xs: 5, md: 10 } }}
      >
        {/* ======================================================= */}
        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0, translateY: 550, translateX: -550 }}
            animate={{ opacity: 1, translateY: 0, translateX: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
            }}
          >
            <CardStyled sx={{ boxShadow: 8 }}>
              <CardContent sx={{ p: '0 !important' }}>
                <CardHeader
                  title={
                    <Typography
                      variant="h3"
                      style={{ textTransform: 'uppercase' }}
                    >
                      <FormattedMessage id="competence" />
                    </Typography>
                  }
                />
                {CompetenceData.expertise.map((ski, key) => (
                  <Expertise
                    key={key}
                    skill_name={ski.skill_name}
                    skill_level={ski.skill_level}
                  />
                ))}
              </CardContent>
            </CardStyled>
          </motion.div>
        </Grid>
        {/* ======================================================= */}
        <Grid item xs={12} md={9}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
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
                    <FormattedMessage id="work_experience" />
                  </Typography>
                }
              />
              <CardContent>
                <Grid container spacing={1} sx={{ mb: 1 }}>
                  <Grid item xs={12}>
                    {WorkData.map((exp, key) => (
                      <WorkExperience
                        key={key}
                        title={exp.title}
                        company={exp.company}
                        description={exp.description}
                        date={exp.date}
                        current={exp.current}
                      />
                    ))}
                  </Grid>
                </Grid>
              </CardContent>
            </CardStyled>
          </motion.div>
        </Grid>
        {/* ======================================================= */}
        <Grid item xs={12} md={3} />
        {/* ======================================================= */}
        <Grid item xs={12} md={9} sx={{ mt: { xs: -3, md: 0 } }}>
          <FadeInWhenVisible>
            <CardStyled sx={{ boxShadow: 8 }}>
              <CardHeader
                title={
                  <Typography
                    variant="h3"
                    style={{ textTransform: 'uppercase' }}
                  >
                    <FormattedMessage id="educations" />
                  </Typography>
                }
              />
              <CardContent>
                <Grid container spacing={1} sx={{ mb: 1 }}>
                  <Grid item xs={12}>
                    {EducationData.map((edu, key) => (
                      <Education
                        key={key}
                        degree={edu.degree}
                        school={edu.school}
                        description={edu.description}
                        date={edu.date}
                      />
                    ))}
                  </Grid>
                </Grid>
              </CardContent>
            </CardStyled>
          </FadeInWhenVisible>
        </Grid>
        {/* ======================================================= */}
        <Grid item xs={12} md={3} />
        {/* ======================================================= */}
        <Grid item xs={12} md={9} sx={{ mt: { xs: -3, md: 0 } }}>
          <FadeInWhenVisible>
            <CardStyled sx={{ boxShadow: 8 }}>
              <CardHeader
                title={
                  <Typography
                    variant="h3"
                    style={{ textTransform: 'uppercase' }}
                  >
                    <FormattedMessage id="get_in_touch" />
                  </Typography>
                }
              />
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <ContactMe />
                  </Grid>
                </Grid>
              </CardContent>
            </CardStyled>
          </FadeInWhenVisible>
        </Grid>
        {/* ======================================================= */}
      </Grid>
    </Container>
  );
};

export default ContentPage;
