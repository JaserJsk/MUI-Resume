import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import {
  Grid,
  Stack,
  Button,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

// Third Party
import NumberFormat from 'react-number-format';
import { FormattedMessage } from 'react-intl';

// Project Imports
import AnimateButton from 'components/extended/AnimateButton';

// ==============================|| RESUME - WORK EXPERIENCE ||============================== //

const ContactMe = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AlertDialog = () => (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="title"
      aria-describedby="description"
      sx={{ p: 3 }}
    >
      {open && (
        <>
          <DialogTitle id="title">
            <FormattedMessage id="message_sent" />
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="description">
              <Typography variant="body2" component="span">
                <FormattedMessage id="thanks_for" />
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ pr: 2.5 }}>
            <Button
              variant="contained"
              size="small"
              onClick={handleClose}
              autoFocus
            >
              <FormattedMessage id="close" />
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel>
            <FormattedMessage id="full_name" />
          </InputLabel>
          <OutlinedInput
            type="text"
            label={<FormattedMessage id="full_name" />}
          />
        </FormControl>
      </Grid>
      {/* ======================================================= */}
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel>
            <FormattedMessage id="company" />
          </InputLabel>
          <OutlinedInput
            type="text"
            label={<FormattedMessage id="company" />}
          />
        </FormControl>
      </Grid>
      {/* ======================================================= */}
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel>
            <FormattedMessage id="email_address" />
          </InputLabel>
          <OutlinedInput
            type="text"
            label={<FormattedMessage id="email_address" />}
          />
        </FormControl>
      </Grid>
      {/* ======================================================= */}
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <NumberFormat
            fullWidth
            mask="_"
            format="+46 ### ### ###"
            customInput={TextField}
            label={<FormattedMessage id="phone_number" />}
          />
        </FormControl>
      </Grid>
      {/* ======================================================= */}
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="message"
            fullWidth
            multiline
            rows={4}
            label={<FormattedMessage id="your_message" />}
          />
        </FormControl>
      </Grid>
      {/* ======================================================= */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item sm zeroMinWidth>
            <Typography align="left" variant="body2">
              <FormattedMessage id="by_submitting" />
              <Typography
                variant="subtitle1"
                component={Link}
                to="#"
                color="primary"
                sx={{ mx: 0.5 }}
              >
                <FormattedMessage id="terms_condition" />
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row">
              <AnimateButton>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClickOpen}
                >
                  <FormattedMessage id="send" />
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      {/* ======================================================= */}
      <AlertDialog />
    </Grid>
  );
};

export default ContactMe;
