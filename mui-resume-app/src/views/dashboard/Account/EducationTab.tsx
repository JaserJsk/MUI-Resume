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

import EducationData from 'Mock/education.json';

// Third Party
import { FormattedMessage } from 'react-intl';

// Project Imports
import { gridSpacing } from 'store/constant';
import SubCard from 'components/cards/SubCard';
import AnimateButton from 'components/extended/AnimateButton';
import EducationRow from 'views/dashboard/Account/rows/EducationRow';

// ==============================|| ACCOUNT - EDUCATION TAB ||============================== //

const EducationTab = () => (
  <Grid container spacing={gridSpacing}>
    <Grid item xs={12}>
      <SubCard title={<FormattedMessage id="add_education" />}>
        <Grid container spacing={gridSpacing}>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel>
                <FormattedMessage id="degree" />
              </InputLabel>
              <OutlinedInput
                type="text"
                label={<FormattedMessage id="degree" />}
              />
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel>
                <FormattedMessage id="school" />
              </InputLabel>
              <OutlinedInput
                type="text"
                label={<FormattedMessage id="school" />}
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
      <SubCard sx={{ mt: 3 }} title={<FormattedMessage id="educations" />}>
        <TableContainer>
          <Table aria-label="Educations Table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 20, pl: 5 }}>#</TableCell>
                <TableCell>
                  <FormattedMessage id="degree" />
                </TableCell>
                <TableCell align="right">
                  <FormattedMessage id="school" />
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
              {EducationData.map((edu, key) => (
                <EducationRow
                  key={key}
                  degree={edu.degree}
                  school={edu.school}
                  description={edu.description}
                  date={edu.date}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SubCard>
    </Grid>
  </Grid>
);

export default EducationTab;
