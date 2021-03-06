import {
  StylesProvider,
  MuiThemeProvider,
  CssBaseline,
  NoSsr,
} from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { theme, muiTheme } from 'utils/theme';

const AppThemeProvider = ({ children }) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NoSsr />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export default AppThemeProvider;
