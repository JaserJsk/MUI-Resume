import React from 'react';

// Material UI
import {
  Avatar,
  Button,
  Grid,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

// Third Party
import NumberFormat from 'react-number-format';
import { FormattedMessage } from 'react-intl';

// Project Imports
import useAuth from 'hooks/useAuth';
import SubCard from 'components/cards/SubCard';
import AnimateButton from 'components/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// Assets
import UserAvatar from 'assets/images/profile/profile-user.png';

// ==============================|| ACCOUNT - PROFILE TAB ||============================== //

const ProfileTab = () => {
  const { user } = useAuth();

  const [LookingLabel, setLookingLabel] = React.useState('checked');
  const [AcceptLabel, setAcceptLabel] = React.useState('checked');

  const CHARACTER_LIMIT = 500;
  const [helper, setHelper] = React.useState({
    about: '',
  });

  const handleTextChange =
    (about: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setHelper({ ...helper, [about]: event.target.value });
    };

  return (
    <Grid container spacing={gridSpacing}>
      {/* ======================================================= */}
      <Grid item sm={6} md={4}>
        <SubCard
          title={<FormattedMessage id="profile_photo" />}
          contentSX={{ textAlign: 'center' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Avatar
                alt="Current User"
                src={UserAvatar}
                sx={{ width: 100, height: 100, margin: '0 auto' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="center">
                <FormattedMessage id="change_photo" />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <AnimateButton>
                <Button variant="contained" size="small">
                  <FormattedMessage id="upload" />
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </SubCard>
        {/* ======================================================= */}
        <Grid sx={{ mt: 3 }}>
          <SubCard>
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="inherit">
                <FormattedMessage id="job_hunting" />
              </Typography>

              <RadioGroup
                row
                aria-label="work"
                value={LookingLabel}
                onChange={e => setLookingLabel(e.target.value)}
                name="radio-buttons-work"
              >
                <FormControlLabel
                  value="checked"
                  control={<Radio />}
                  label={<FormattedMessage id="yes" />}
                />
                <FormControlLabel
                  value="unchecked"
                  control={<Radio />}
                  label={<FormattedMessage id="no" />}
                />
              </RadioGroup>
            </Grid>
            {/* ======================================================= */}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography variant="subtitle1" color="inherit">
                <FormattedMessage id="ok_freelance" />
              </Typography>

              <RadioGroup
                row
                aria-label="freelance"
                value={AcceptLabel}
                onChange={e => setAcceptLabel(e.target.value)}
                name="radio-buttons-freelance"
              >
                <FormControlLabel
                  value="checked"
                  control={<Radio />}
                  label={<FormattedMessage id="yes" />}
                />
                <FormControlLabel
                  value="unchecked"
                  control={<Radio />}
                  label={<FormattedMessage id="no" />}
                />
              </RadioGroup>
            </Grid>
          </SubCard>
        </Grid>
      </Grid>
      {/* ======================================================= */}
      <Grid item sm={6} md={8}>
        <SubCard title={<FormattedMessage id="edit_account" />}>
          <Grid container spacing={gridSpacing}>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>
                  <FormattedMessage id="title" />
                </InputLabel>
                <OutlinedInput
                  type="text"
                  defaultValue="Fullstack Developer"
                  label={<FormattedMessage id="title" />}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>
                  <FormattedMessage id="full_name" />
                </InputLabel>
                <OutlinedInput
                  type="text"
                  defaultValue={user?.name}
                  label={<FormattedMessage id="full_name" />}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>
                  <FormattedMessage id="email_address" />
                </InputLabel>
                <OutlinedInput
                  type="text"
                  defaultValue={user?.email}
                  label={<FormattedMessage id="email_address" />}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>
                  <FormattedMessage id="dob" />
                </InputLabel>
                <OutlinedInput
                  type="text"
                  defaultValue="05 Sep 1986"
                  label={<FormattedMessage id="dob" />}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <NumberFormat
                  fullWidth
                  mask="_"
                  format="+46 ### ### ###"
                  customInput={TextField}
                  defaultValue="+46 256 251 02 56"
                  label={<FormattedMessage id="phone_number" />}
                />
              </FormControl>
            </Grid>
            {/* ======================================================= */}
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>
                  <FormattedMessage id="address" />
                </InputLabel>
                <OutlinedInput
                  type="text"
                  defaultValue="Border Street, Clinton Township, MI 78035"
                  label={<FormattedMessage id="address" />}
                />
              </FormControl>
            </Grid>
            {/* ======================================================= */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="about-me"
                  fullWidth
                  multiline
                  rows={4}
                  label={<FormattedMessage id="about_me" />}
                  inputProps={{ maxLength: CHARACTER_LIMIT }}
                  helperText={`${helper.about.length}/${CHARACTER_LIMIT}`}
                  onChange={handleTextChange('about')}
                />
              </FormControl>
            </Grid>
            {/* ======================================================= */}
            <Grid item xs={12}>
              <Stack direction="row">
                <AnimateButton>
                  <Button variant="contained">
                    <FormattedMessage id="save" />
                  </Button>
                </AnimateButton>
              </Stack>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      {/* ======================================================= */}
    </Grid>
  );
};

export default ProfileTab;
