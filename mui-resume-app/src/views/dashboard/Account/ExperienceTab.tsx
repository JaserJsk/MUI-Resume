// Material UI
import {
  Grid,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import WorkData from 'Mock/experience.json';

// Third Party
import { FormattedMessage } from 'react-intl';

// Project Imports
import { gridSpacing } from 'store/constant';
import SubCard from 'components/cards/SubCard';
import AnimateButton from 'components/extended/AnimateButton';
import ExperienceRow from 'views/dashboard/Account/rows/ExperienceRow';

// ==============================|| ACCOUNT - WORKEXP TAB ||============================== //

const ExperienceTab = () => (
  <Grid container spacing={gridSpacing}>
    <Grid item xs={12}>
      <SubCard title={<FormattedMessage id="add_experience" />}>
        <Grid container spacing={gridSpacing}>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel>
                <FormattedMessage id="title" />
              </InputLabel>
              <OutlinedInput
                type="text"
                label={<FormattedMessage id="title" />}
              />
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
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
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel>
                <FormattedMessage id="date" />
              </InputLabel>
              <OutlinedInput
                type="text"
                label={<FormattedMessage id="date" />}
              />
            </FormControl>
          </Grid>
          {/* ======================================================= */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="description"
                fullWidth
                multiline
                rows={4}
                label={<FormattedMessage id="description" />}
              />
            </FormControl>
          </Grid>
          {/* ======================================================= */}
          <Grid item xs={12}>
            <Stack direction="row">
              <AnimateButton>
                <Button variant="contained">
                  <FormattedMessage id="add" />
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </SubCard>
      {/* ======================================================= */}
      <SubCard sx={{ mt: 3 }} title={<FormattedMessage id="work_experience" />}>
        <TableContainer>
          <Table aria-label="Work Experience Table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 20, pl: 5 }}>#</TableCell>
                <TableCell>
                  <FormattedMessage id="title" />
                </TableCell>
                <TableCell align="right">
                  <FormattedMessage id="company" />
                </TableCell>
                <TableCell align="right">
                  <FormattedMessage id="date" />
                </TableCell>
                <TableCell align="right">
                  <FormattedMessage id="action" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {WorkData.map((exp, key) => (
                <ExperienceRow
                  key={key}
                  title={exp.title}
                  company={exp.company}
                  description={exp.description}
                  date={exp.date}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SubCard>
    </Grid>
  </Grid>
);

export default ExperienceTab;
