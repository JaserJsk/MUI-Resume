import React from 'react';

// Material UI
import { styled } from '@mui/material/styles';
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Button,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

// Types
import { EducationProps } from 'types/education';

// Third Party
import { FormattedMessage } from 'react-intl';

// Project Imports
import Avatar from 'components/extended/Avatar';

// Assets
import School from '@mui/icons-material/SchoolTwoTone';
import OpenInNewIcon from '@mui/icons-material/OpenInNewTwoTone';

// ==============================|| RESUME - EDUCATION ||============================== //

const VerticalLine = styled(Typography)({
  marginTop: 10,
  height: 70,
  marginLeft: 33,
  borderLeft: '0.2em solid',
});

const TextContent = styled(Typography)({
  marginTop: 5,
  marginLeft: 20,
  width: '100%',
});

const TitleSpan = styled('span')({
  fontSize: 'medium',
});

const TruncateSpan = styled('span')({
  maxWidth: '100%',
  margin: '20px 0 20px 0',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const ReadMoreBtn = styled(IconButton)({
  marginTop: 5,
});

// ==============================|| RESUME - WORK EXPERIENCE ||============================== //

const Education = ({ degree, school, description, date }: EducationProps) => {
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
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ p: 3 }}
    >
      {open && (
        <>
          <DialogTitle id="alert-dialog-title">{degree}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography variant="body2" component="span">
                {description}
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
    <Grid container>
      <Grid item xs={1} sx={{ mt: -1.5 }}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar size="xs" outline>
                <School sx={{ fontSize: '1.1rem' }} />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <VerticalLine sx={{ color: 'primary.main' }} />
        </List>
      </Grid>
      <Grid item xs={10} sx={{ mt: -1.5 }}>
        <List>
          <ListItem>
            <TextContent>
              <TitleSpan>{degree}</TitleSpan>
              <span style={{ float: 'right' }}>{school}</span>
              <TruncateSpan>{description}</TruncateSpan>
              <span>{date}</span>
            </TextContent>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={1}>
        <List>
          <ListItem>
            <ReadMoreBtn onClick={handleClickOpen}>
              <OpenInNewIcon sx={{ fontSize: '1.1rem' }} />
            </ReadMoreBtn>
          </ListItem>
        </List>
      </Grid>
      <AlertDialog />
    </Grid>
  );
};

export default Education;
