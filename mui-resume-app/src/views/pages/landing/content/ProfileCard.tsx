import { Link } from 'react-router-dom';

// Material UI
import { Grid, IconButton, Typography } from '@mui/material';

// Types
import { UserProfileProps } from 'types/user-profile';

// Project Imports
import FadeInWhenVisible from 'views/pages/Animation';
import SubCard from 'components/cards/SubCard';
import Avatar from 'components/extended/Avatar';

// ==============================|| LANDING - HEADER PAGE ||============================== //

const ProfileCard = ({ name, title, avatar: photo, url }: UserProfileProps) => {
  const photoImage = require.context('assets/images/profile', true);
  const profilePhoto = photo && photoImage(`./${photo}`).default;

  return (
    <Grid item md={4} sm={6}>
      <FadeInWhenVisible>
        <SubCard>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <IconButton component={Link} to="/resume">
                <Avatar
                  alt={name}
                  src={profilePhoto}
                  size="xl"
                  variant="circular"
                  sx={{ width: 130, height: 130 }}
                />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">{name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">{title}</Typography>
            </Grid>
          </Grid>
        </SubCard>
      </FadeInWhenVisible>
    </Grid>
  );
};

export default ProfileCard;
