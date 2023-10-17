import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
 
export default function App() {

  const ccTheme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Work Sans"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }
  });
 
  return (
    <ThemeProvider theme={ccTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h2>Center City Next Steps</h2>
      </Container>
    </ThemeProvider>
  );
}