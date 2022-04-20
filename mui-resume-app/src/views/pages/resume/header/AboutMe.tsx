// material-ui
import { Typography } from '@mui/material';

// types
import { UserProfileProps } from 'types/user-profile';

// ================================|| UI LIST - FOLDER ||================================ //

const AboutMe = ({ about_me }: UserProfileProps) => (
  <Typography variant="subtitle1" color="inherit">
    {about_me}
  </Typography>
);

export default AboutMe;
