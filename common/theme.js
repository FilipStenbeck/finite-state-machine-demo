import '@fontsource/roboto/';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
