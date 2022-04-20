import React from 'react';

// material-ui
import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Stack,
  Tooltip,
} from '@mui/material';

// types
import { ExperienceProps } from 'types/experience';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconEdit, IconTrash } from '@tabler/icons';

// ==============================|| ACCOUNT - WORKEXP ROW ||============================== //

const ExperienceRow = ({
  title,
  company,
  description,
  date,
}: ExperienceProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{ pl: 3 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {title}
        </TableCell>
        <TableCell align="right">{company}</TableCell>
        <TableCell align="right">{date}</TableCell>
        <TableCell align="right">
          {/* ======================================================= */}
          <Stack direction="row" justifyContent="right" alignItems="right">
            <Tooltip placement="top" title={<FormattedMessage id="edit" />}>
              <IconButton color="primary" aria-label="edit" size="small">
                <IconEdit />
              </IconButton>
            </Tooltip>
            <Tooltip placement="top" title={<FormattedMessage id="delete" />}>
              <IconButton color="primary" aria-label="delete" size="small">
                <IconTrash />
              </IconButton>
            </Tooltip>
          </Stack>
          {/* ======================================================= */}
        </TableCell>
      </TableRow>
      {/* ======================================================= */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {open && (
              <Box sx={{ margin: 1 }}>
                <TableContainer>
                  <Typography variant="subtitle1" color="inherit">
                    {description}
                  </Typography>
                </TableContainer>
              </Box>
            )}
          </Collapse>
        </TableCell>
      </TableRow>
      {/* ======================================================= */}
    </>
  );
};

export default ExperienceRow;
