import { useState } from 'react';

// Material UI
import { useTheme } from '@mui/material/styles';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

// Project Imports
import useConfig from 'hooks/useConfig';
import SubCard from 'components/cards/SubCard';

const FontFamily = () => {
  const theme = useTheme();
  const { fontFamily, onChangeFontFamily } = useConfig();

  let initialFont;
  switch (fontFamily) {
    case `'Ubuntu', sans-serif`:
      initialFont = 'Ubuntu';
      break;
    case `'Quicksand', sans-serif`:
      initialFont = 'Quicksand';
      break;
    case `'Roboto', sans-serif`:
    default:
      initialFont = 'Roboto';
      break;
  }

  // state - font family
  const [font, setFont] = useState(initialFont);

  const handleFont = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFont(event.target.value);
    onChangeFontFamily(event.target.value);
  };

  return (
    <SubCard title="Font Family">
      <FormControl>
        <RadioGroup
          aria-label="font-family"
          value={font}
          onChange={handleFont}
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="Roboto"
            control={<Radio />}
            label="Roboto"
            sx={{
              '& .MuiSvgIcon-root': { fontSize: 28 },
              '& .MuiFormControlLabel-label': {
                color: theme.palette.grey[900],
              },
            }}
          />
          <FormControlLabel
            value="Ubuntu"
            control={<Radio />}
            label="Ubuntu"
            sx={{
              '& .MuiSvgIcon-root': { fontSize: 28 },
              '& .MuiFormControlLabel-label': {
                color: theme.palette.grey[900],
              },
            }}
          />
          <FormControlLabel
            value="Quicksand"
            control={<Radio />}
            label="Quicksand"
            sx={{
              '& .MuiSvgIcon-root': { fontSize: 28 },
              '& .MuiFormControlLabel-label': {
                color: theme.palette.grey[900],
              },
            }}
          />
        </RadioGroup>
      </FormControl>
    </SubCard>
  );
};

export default FontFamily;
