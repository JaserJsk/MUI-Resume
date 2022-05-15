// Material UI
import { Typography } from '@mui/material';

// Types
import { UserProfileProps } from 'types/user-profile';

// ================================|| RESUME - ABOUT ME ||================================ //

const AboutMe = ({ about_me }: UserProfileProps) => (
  <Typography variant="subtitle1" color="inherit">
    {about_me}
  </Typography>
);

export default AboutMe;
