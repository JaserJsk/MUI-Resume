// Material UI
import { useTheme } from '@mui/material/styles';
import { Avatar, Grid } from '@mui/material';
import { IconChecks } from '@tabler/icons';

// Project Imports
import useConfig from 'hooks/useConfig';
import SubCard from 'components/cards/SubCard';

// color import
import defaultTheme from 'assets/scss/_blueTheme.module.scss';
import indigoTheme from 'assets/scss/_indigoTheme.module.scss';
import purpleheme from 'assets/scss/_purpleTheme.module.scss';
import redTheme from 'assets/scss/_redTheme.module.scss';
import greenTheme from 'assets/scss/_greenTheme.module.scss';
import amberTheme from 'assets/scss/_amberTheme.module.scss';

// Types
import { StringColorProps } from 'types';

interface Props {
  color: StringColorProps;
  presetColor: string;
  setPresetColor: (s: string) => void;
}

const PresetColorBox = ({ color, presetColor, setPresetColor }: Props) => (
  <Grid item>
    <Avatar
      variant="rounded"
      color="inherit"
      sx={{
        background: `linear-gradient(135deg, ${color.primary} 50%, ${color.secondary} 50%)`,
        opacity: presetColor === color.id ? 0.6 : 1,
        cursor: 'pointer',
      }}
      onClick={() => setPresetColor(color?.id!)}
    >
      {presetColor === color.id && <IconChecks color="#fff" />}
    </Avatar>
  </Grid>
);

const PresetColor = () => {
  const theme = useTheme();
  const { presetColor, onChangePresetColor } = useConfig();

  const colorOptions = [
    {
      id: 'default',
      primary:
        theme.palette.mode === 'dark'
          ? defaultTheme.darkPrimaryMain
          : defaultTheme.primaryMain,
      secondary:
        theme.palette.mode === 'dark'
          ? defaultTheme.darkSecondaryMain
          : defaultTheme.secondaryMain,
    },
    {
      id: 'theme1',
      primary:
        theme.palette.mode === 'dark'
          ? indigoTheme.darkPrimaryMain
          : indigoTheme.primaryMain,
      secondary:
        theme.palette.mode === 'dark'
          ? indigoTheme.darkSecondaryMain
          : indigoTheme.secondaryMain,
    },
    {
      id: 'theme2',
      primary:
        theme.palette.mode === 'dark'
          ? purpleheme.darkPrimaryMain
          : purpleheme.primaryMain,
      secondary:
        theme.palette.mode === 'dark'
          ? purpleheme.darkSecondaryMain
          : purpleheme.secondaryMain,
    },
    {
      id: 'theme3',
      primary:
        theme.palette.mode === 'dark'
          ? redTheme.darkPrimaryMain
          : redTheme.primaryMain,
      secondary:
        theme.palette.mode === 'dark'
          ? redTheme.darkSecondaryMain
          : redTheme.secondaryMain,
    },
    {
      id: 'theme4',
      primary:
        theme.palette.mode === 'dark'
          ? greenTheme.darkPrimaryMain
          : greenTheme.primaryMain,
      secondary:
        theme.palette.mode === 'dark'
          ? greenTheme.darkSecondaryMain
          : greenTheme.secondaryMain,
    },
    {
      id: 'theme5',
      primary:
        theme.palette.mode === 'dark'
          ? amberTheme.darkPrimaryMain
          : amberTheme.primaryMain,
      secondary:
        theme.palette.mode === 'dark'
          ? amberTheme.darkSecondaryMain
          : amberTheme.secondaryMain,
    },
  ];

  return (
    <SubCard title="Preset Color">
      <Grid item container spacing={2} alignItems="center">
        {colorOptions.map((color, index) => (
          <PresetColorBox
            key={index}
            color={color}
            presetColor={presetColor}
            setPresetColor={onChangePresetColor}
          />
        ))}
      </Grid>
    </SubCard>
  );
};

export default PresetColor;
