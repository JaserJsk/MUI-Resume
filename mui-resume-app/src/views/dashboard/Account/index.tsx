import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Box, Tab, Tabs } from '@mui/material';

// third-party
import { FormattedMessage } from 'react-intl';

// project imports
import { TabsProps } from 'types';
import MainCard from 'components/cards/MainCard';
import ProfileTab from './ProfileTab';
import ExperienceTab from './ExperienceTab';
import EducationTab from './EducationTab';
import CompetenceTab from './CompetenceTab';
import SettingsTab from './SettingsTab';

// tabs
function TabPanel({ children, value, index, ...other }: TabsProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// ==============================|| ACCOUNT ||============================== //

const Account = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <MainCard title={<FormattedMessage id="account" />}>
      <div>
        <Tabs
          value={value}
          indicatorColor="primary"
          onChange={handleChange}
          sx={{
            mb: 3,
            minHeight: 'auto',
            '& button': {
              minWidth: 100,
            },
            '& a': {
              minHeight: 'auto',
              minWidth: 10,
              py: 1.5,
              px: 1,
              mr: 2.25,
              color: 'grey.600',
            },
            '& a.Mui-selected': {
              color: 'secondary.main',
            },
          }}
          aria-label="simple tabs example"
          variant="scrollable"
        >
          <Tab
            component={Link}
            to="#"
            label={<FormattedMessage id="profile" />}
            {...a11yProps(0)}
          />
          <Tab
            component={Link}
            to="#"
            label={<FormattedMessage id="experience" />}
            {...a11yProps(1)}
          />
          <Tab
            component={Link}
            to="#"
            label={<FormattedMessage id="educations" />}
            {...a11yProps(2)}
          />
          <Tab
            component={Link}
            to="#"
            label={<FormattedMessage id="competence" />}
            {...a11yProps(3)}
          />
          <Tab
            component={Link}
            to="#"
            label={<FormattedMessage id="settings" />}
            {...a11yProps(3)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ProfileTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ExperienceTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <EducationTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CompetenceTab />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <SettingsTab />
        </TabPanel>
      </div>
    </MainCard>
  );
};

export default Account;
