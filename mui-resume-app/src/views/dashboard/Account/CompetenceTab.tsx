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
  Autocomplete,
} from '@mui/material';

import CompetenceData from 'Mock/competence.json';

// Third Party
import { FormattedMessage } from 'react-intl';

// Project Imports
import { gridSpacing } from 'store/constant';
import SubCard from 'components/cards/SubCard';
import AnimateButton from 'components/extended/AnimateButton';
import LanguageRow from 'views/dashboard/Account/rows/LanguageRow';
import SkillRow from 'views/dashboard/Account/rows/ExpertiseRow';

// ==============================|| ACCOUNT - SKILLS TAB ||============================== //

// Autocomplete Pptions
const skillTypes = [
  { label: 'Language', id: 1 },
  { label: 'Expertise', id: 2 },
];

const CompetenceTab = () => (
  <Grid container spacing={gridSpacing}>
    <Grid item xs={12}>
      <SubCard title={<FormattedMessage id="add_skill" />}>
        <Grid container spacing={gridSpacing}>
          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel>
                <FormattedMessage id="skill_name" />
              </InputLabel>
              <OutlinedInput
                type="text"
                label={<FormattedMessage id="skill_name" />}
              />
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel>
                <FormattedMessage id="level" />
              </InputLabel>
              <OutlinedInput
                type="text"
                label={<FormattedMessage id="level" />}
              />
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <Autocomplete
              disableClearable
              options={skillTypes}
              defaultValue={skillTypes[0]}
              renderInput={params => (
                <TextField {...params} label={<FormattedMessage id="type" />} />
              )}
            />
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
      <SubCard sx={{ mt: 3 }} title={<FormattedMessage id="language" />}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 250 }}>
                  <FormattedMessage id="skill_name" />
                </TableCell>
                <TableCell align="right">
                  <FormattedMessage id="level" />
                </TableCell>
                <TableCell align="right">
                  <FormattedMessage id="type" />
                </TableCell>
                <TableCell align="right">
                  <FormattedMessage id="action" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {CompetenceData.language.map((lang, key) => (
                <LanguageRow
                  key={key}
                  skill_name={lang.skill_name}
                  skill_level={lang.skill_level}
                  type={lang.type}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SubCard>
      {/* ======================================================= */}
      <SubCard sx={{ mt: 3 }} title={<FormattedMessage id="expertise" />}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 250 }}>
                  <FormattedMessage id="skill_name" />
                </TableCell>
                <TableCell align="right">
                  <FormattedMessage id="level" />
                </TableCell>
                <TableCell align="right">
                  <FormattedMessage id="type" />
                </TableCell>
                <TableCell align="right">
                  <FormattedMessage id="action" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {CompetenceData.expertise.map((ski, key) => (
                <SkillRow
                  key={key}
                  skill_name={ski.skill_name}
                  skill_level={ski.skill_level}
                  type={ski.type}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SubCard>
      {/* ======================================================= */}
    </Grid>
  </Grid>
);

export default CompetenceTab;
