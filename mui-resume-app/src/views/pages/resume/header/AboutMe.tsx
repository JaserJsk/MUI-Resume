// material-ui
import { Typography } from '@mui/material';

// types
import { UserResumeProps } from 'types/user-resume';

// ================================|| UI LIST - FOLDER ||================================ //

const AboutMe = ({ about_me }: UserResumeProps) => (
  <Typography variant="subtitle1" color="inherit">
    {about_me}
  </Typography>
);

export default AboutMe;
