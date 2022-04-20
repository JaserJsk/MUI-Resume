// material-ui
import {
  Button,
  Grid,
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

// third-party
import { FormattedMessage } from 'react-intl';

// project imports
import { gridSpacing } from 'store/constant';
import SubCard from 'components/cards/SubCard';
import AnimateButton from 'components/extended/AnimateButton';
import Control from 'components/extended/Form/FormControl';

// assets
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
} from '@tabler/icons';

// ==============================|| ACCOUNT - SETTINGS TAB ||============================== //

const SettingsTab = () => (
  <Grid container spacing={gridSpacing}>
    <Grid item sm={6} md={6}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <SubCard title={<FormattedMessage id="social_media" />}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Control
                  iconPrimary={IconBrandFacebook}
                  placeholder="www.facebook.com"
                />
              </Grid>
              <Grid item xs={12}>
                <Control
                  iconPrimary={IconBrandTwitter}
                  placeholder="www.twitter.com"
                />
              </Grid>
              <Grid item xs={12}>
                <Control
                  iconPrimary={IconBrandLinkedin}
                  placeholder="www.linkedin.com"
                />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
      </Grid>
    </Grid>
    {/* ======================================================= */}
    <Grid item sm={6} md={6}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <SubCard title={<FormattedMessage id="change_password" />}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>
                    <FormattedMessage id="current_password" />
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    label={<FormattedMessage id="current_password" />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>
                    <FormattedMessage id="new_password" />
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    label={<FormattedMessage id="new_password" />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>
                    <FormattedMessage id="reenter_password" />
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    label={<FormattedMessage id="reenter_password" />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row">
                  <AnimateButton>
                    <Button variant="contained">
                      <FormattedMessage id="change" />
                    </Button>
                  </AnimateButton>
                </Stack>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
      </Grid>
    </Grid>
    {/* ======================================================= */}
  </Grid>
);

export default SettingsTab;
