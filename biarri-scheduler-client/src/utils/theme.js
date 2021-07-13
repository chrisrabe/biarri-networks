import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import colors from './colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      main: colors.dark,
    },
    text: {
      primary: colors.dark,
      secondary: colors.secondary,
    },
  },
});

export const muiTheme = responsiveFontSizes(theme);
