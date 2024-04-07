import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CCStepper from "./components/CCStepper";
import { useProgress } from "./store";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Welcome from "./components/Welcome";
import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";

export default function Home() {
  const [snackOpen, setSnackOpen] = useState(false);
  const { currentStep, incrCurrentStep } = useProgress();

  const handleClose = () => {
    setSnackOpen(false);
  };

  useEffect(() => {
    if (currentStep > -1) {
      setSnackOpen(true)
    }
  }, [])

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Container component="main" maxWidth="md">
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={4000}
        open={snackOpen}
        onClose={handleClose}
      >
        <SnackbarContent
          message="Welcome back! We saved your progress."
          action={action}
          sx={{ backgroundColor: "primary.main" }}
        />
      </Snackbar>
      <CssBaseline />
      <Grid container spacing={2} sx={{ mt: 2 }} id="start">
        <Grid item xs={3} sm={2}>
          <img src="/whitecrown.png" alt="Center City Logo" width="80%" />
        </Grid>
        <Grid item alignSelf={"end"} xs={9} sm={10}>
          <Typography sx={{ typography: { sm: "h3", xs: "h4" } }} gutterBottom>
            <strong>Next Steps</strong>
          </Typography>
        </Grid>
        <Box sx={{ width: "100%" }}>
          <Divider
            variant="middle"
            sx={{ mt: 3, mb: 2, mr: 0, backgroundColor: "primary.main" }}
          />
        </Box>
        <Grid item xs={12}>
          {currentStep < 0 ? <Welcome /> : <CCStepper />}
        </Grid>
        <Grid container item xs={12} justifyContent={"center"}>
          {currentStep < 0 && (
            <Button
              variant="contained"
              onClick={incrCurrentStep}
              sx={{ mt: 2, mb: 0 }}
              href="#start"
            >
              Are You Ready?
            </Button>
          )}
        </Grid>
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
