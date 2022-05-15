// Material UI
import { useTheme, styled } from '@mui/material/styles';
import { Button, Chip, Fab, Grid, Typography } from '@mui/material';

// Types
import { UserProfileProps } from 'types/user-profile';

// Third Party
import { FormattedMessage } from 'react-intl';

// Project Imports
import { gridSpacing } from 'store/constant';
import Avatar from 'components/extended/Avatar';

// Assets
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';

// ==============================|| RESUME - USER PROFILE ||============================== //

const UserProfile = ({
  name,
  title,
  hunting,
  avatar: photo,
}: UserProfileProps) => {
  const theme = useTheme();
  const photoImage = require.context('assets/images/profile', true);
  const profilePhoto = photo && photoImage(`./${photo}`).default;

  const jobHunting = hunting;

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const FacebookWrapper = styled(Fab)({
    background: 'rgba(66, 103, 178, 0.2)',
    '& svg': {
      color: theme.palette.secondary.main,
    },
    '&:hover': {
      background: '#4267B2',
      '& svg': {
        color: '#fff',
      },
    },
  });

  const TwitterWrapper = styled(Fab)({
    background: 'rgba(29, 161, 242, 0.2)',
    '& svg': {
      color: theme.palette.secondary.main,
    },
    '&:hover': {
      background: '#1DA1F2',
      '& svg': {
        color: '#fff',
      },
    },
  });

  const LinkedInWrapper = styled(Fab)({
    background: 'rgba(14, 118, 168, 0.12)',
    '& svg': {
      color: theme.palette.secondary.main,
    },
    '&:hover': {
      background: '#0E76A8',
      '& svg': {
        color: '#fff',
      },
    },
  });

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Avatar
          alt={name}
          src={profilePhoto}
          sx={{ width: 160, height: 160, m: '30px auto 0' }}
        />
      </Grid>
      {/* ======================================================= */}
      <Grid item xs={12} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4">{name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">{title}</Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          {jobHunting ? (
            <Chip
              label={<FormattedMessage id="job_hunting" />}
              size="medium"
              sx={{
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? theme.palette.secondary.main
                    : 'secondary.main',
                color: 'secondary.light',
                border: 1,
                borderBlockColor: 'error.dark',
              }}
            />
          ) : (
            <Chip
              label={<FormattedMessage id="no_hunting" />}
              size="medium"
              sx={{
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? theme.palette.secondary.main
                    : 'secondary.main',
                color: 'secondary.light',
                border: 1,
                borderBlockColor: 'error.dark',
              }}
            />
          )}
        </Grid>
      </Grid>
      {/* ======================================================= */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FacebookWrapper>
              <FacebookIcon />
            </FacebookWrapper>
          </Grid>
          <Grid item xs={4}>
            <TwitterWrapper>
              <TwitterIcon />
            </TwitterWrapper>
          </Grid>
          <Grid item xs={4}>
            <LinkedInWrapper>
              <LinkedInIcon />
            </LinkedInWrapper>
          </Grid>
        </Grid>
      </Grid>
      {/* ======================================================= */}
      <Grid item xs={12} mb={2}>
        <Button
          color="secondary"
          variant="contained"
          fullWidth
          startIcon={<ChatBubbleTwoToneIcon />}
          onClick={handleScroll}
        >
          <FormattedMessage id="message" />
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
