import { ThemeProvider, createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h1: {
      fontSize: "12px"
    }
  }
});