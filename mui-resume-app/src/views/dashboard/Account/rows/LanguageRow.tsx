// material-ui
import { Stack, IconButton, TableCell, TableRow, Tooltip } from '@mui/material';

// types
import { CompetenceProps } from 'types/competence';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconEdit, IconTrash } from '@tabler/icons';

// ==============================|| ACCOUNT - LANGUAGE ROW ||============================== //

const LanguageRow = ({ skill_name, skill_level, type }: CompetenceProps) => (
  <TableRow hover key={skill_name}>
    <TableCell component="th" scope="row">
      {skill_name}
    </TableCell>
    <TableCell align="right">{skill_level}</TableCell>
    <TableCell align="right">{type}</TableCell>
    <TableCell align="right">
      <Stack direction="row" justifyContent="right" alignItems="right">
        <Tooltip placement="top" title={<FormattedMessage id="edit" />}>
          <IconButton color="primary" aria-label="edit" size="small">
            <IconEdit />
          </IconButton>
        </Tooltip>
        <Tooltip placement="top" title={<FormattedMessage id="delete" />}>
          <IconButton color="primary" aria-label="Delete" size="small">
            <IconTrash />
          </IconButton>
        </Tooltip>
      </Stack>
    </TableCell>
  </TableRow>
);

export default LanguageRow;
