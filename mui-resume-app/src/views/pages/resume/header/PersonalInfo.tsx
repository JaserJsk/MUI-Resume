// material-ui
import { Grid, List, ListItem, Typography } from '@mui/material';

// types
import { UserProfileProps } from 'types/user-profile';

// third party
import { FormattedMessage } from 'react-intl';

// ================================|| RESUME - PERSONAL INFO ||================================ //

const PersonalInfo = ({
  name: fullname,
  dob,
  address,
  email,
  phone,
  freelance,
}: UserProfileProps) => {
  const okFreelance = freelance;

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <List>
          <ListItem>
            <Grid item justifyContent="space-between">
              <Grid item>
                <Typography
                  color="secondary"
                  style={{ textTransform: 'uppercase' }}
                >
                  <FormattedMessage id="full_name" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{fullname}</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid item justifyContent="space-between">
              <Grid item>
                <Typography
                  color="secondary"
                  style={{ textTransform: 'uppercase' }}
                >
                  <FormattedMessage id="dob" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{dob}</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid item justifyContent="space-between">
              <Grid item>
                <Typography
                  color="secondary"
                  style={{ textTransform: 'uppercase' }}
                >
                  <FormattedMessage id="address" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{address}</Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={6}>
        <List>
          <ListItem>
            <Grid item justifyContent="space-between">
              <Grid item>
                <Typography
                  color="secondary"
                  style={{ textTransform: 'uppercase' }}
                >
                  <FormattedMessage id="email_address" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{email}</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid item justifyContent="space-between">
              <Grid item>
                <Typography
                  color="secondary"
                  style={{ textTransform: 'uppercase' }}
                >
                  <FormattedMessage id="phone_number" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{phone}</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid item justifyContent="space-between">
              <Grid item>
                <Typography
                  color="secondary"
                  style={{ textTransform: 'uppercase' }}
                >
                  <FormattedMessage id="freelance" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  {okFreelance ? (
                    <FormattedMessage id="ok_freelance" />
                  ) : (
                    <FormattedMessage id="no_freelance" />
                  )}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
