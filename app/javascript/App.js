import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CCStepper from "./components/CCStepper";
import ProgressProvider from "./ProgressContext";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

export default function App() {
  const ccTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        light: "#deca18",
        main: "#deb306",
        dark: "#dd9b00",
        contrastText: "#000",
      },
      secondary: {
        light: "#e6e6e6",
        main: "#c4c4c4",
        dark: "#7c7c7c",
        contrastText: "#000",
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Work Sans"',
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  return (
    <ThemeProvider theme={ccTheme}>
      <ProgressProvider>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={4} sm={2}>
              <img
                src="assets/whitecrown.png"
                alt="Center City Logo"
                width={100}
              />
            </Grid>
            <Grid item alignSelf={"end"} xs={8} sm={10}>
              <Typography
                sx={{ typography: { sm: "h3", xs: "h4" } }}
                gutterBottom
              >
                <strong>Next Steps</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CCStepper />
            </Grid>
          </Grid>
        </Container>
      </ProgressProvider>
    </ThemeProvider>
  );
}
