import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { ccTheme } from "./theme";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CCStepper from "./components/CCStepper";
import ProgressProvider from "./ProgressContext";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Welcome from "./components/Welcome";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Footer from "./components/Footer";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <ThemeProvider theme={ccTheme}>
      <ProgressProvider>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Grid container spacing={2} sx={{ mt: 2 }} id="start">
            <Grid item xs={4} sm={2}>
              <img
                src="/whitecrown.png"
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
            <Box sx={{ width: '100%'}}>
              <Divider variant="middle" sx={{mt: 4, mb: 2, mr: 0, backgroundColor: "primary.main"}} />
            </Box>
            <Grid item xs={12}>
              {showWelcome ? <Welcome /> : <CCStepper />}
            </Grid>
            <Grid container item xs={12} justifyContent={"center"}>
              {showWelcome && (<Button
                variant="contained"
                onClick={() => setShowWelcome(false)}
                sx={{ mt: 2, mb: 0 }}
                href="#start"
              >
                Are You Ready?
              </Button> )}
            </Grid>
            <Grid item xs={12} sx={{mt: 4}}>
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </ProgressProvider>
    </ThemeProvider>
  );
}
