// Material UI
import {
  Grid,
  Box,
  List,
  ListItem,
  Typography,
  LinearProgress,
  LinearProgressProps,
} from '@mui/material';

// Types
import { CompetenceProps } from 'types/competence';

// ==============================|| RESUME - EXPERTISE ||============================== //

function LinearProgressWithLabel({ value, ...other }: LinearProgressProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          mr: 1,
        }}
      >
        <LinearProgress variant="determinate" value={value} {...other} />
      </Box>
      <Box
        sx={{
          minWidth: 35,
        }}
      >
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          value!
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const Expertise = ({ skill_name, skill_level }: CompetenceProps) => (
  <List>
    <ListItem>
      <Grid container direction="column">
        <Grid item xs={12}>
          <Typography color="secondary">{skill_name}</Typography>
        </Grid>
        <Grid item>
          <LinearProgressWithLabel
            variant="determinate"
            color="secondary"
            value={skill_level}
          />
        </Grid>
      </Grid>
    </ListItem>
  </List>
);

export default Expertise;
