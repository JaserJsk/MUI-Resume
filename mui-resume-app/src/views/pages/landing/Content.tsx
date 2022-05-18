// Material UI
import { Container, Grid, Typography } from '@mui/material';

// Data
import ProfilesData from 'Mock/profiles.json';

// Third Party
import { FormattedMessage } from 'react-intl';

// Project Imports
import { gridSpacing } from 'store/constant';
import ProfileCard from 'views/pages/landing/content/ProfileCard';

// ==============================|| LANDING - HEADER PAGE ||============================== //

const ContentPage = () => (
  <Container>
    <Grid
      container
      justifyContent="space-between"
      spacing={gridSpacing}
      sx={{ mt: { md: 0 }, mb: { xs: 5, md: 10 } }}
    >
      {/* ======================================================= */}
      <Grid item xs={12}>
        <Typography variant="h2" component="div">
          <FormattedMessage id="browse_profiles" />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          <FormattedMessage id="scroll_down" />
        </Typography>
      </Grid>
      {/* ======================================================= */}
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          spacing={gridSpacing}
          sx={{ textAlign: 'center' }}
        >
          {/* ======================================================= */}
          {ProfilesData.map((item, key) => (
            <ProfileCard
              key={key}
              name={item.name}
              title={item.title}
              avatar={item.avatar}
            />
          ))}
          {/* ======================================================= */}
        </Grid>
      </Grid>
    </Grid>
  </Container>
);

export default ContentPage;
