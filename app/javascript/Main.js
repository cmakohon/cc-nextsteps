import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { ccTheme } from "./theme";
import ProgressProvider from "./ProgressContext";
import Home from './Home';

export default function Main() {
  return (
    <ThemeProvider theme={ccTheme}>
      <ProgressProvider>
        <Home />
      </ProgressProvider>
    </ThemeProvider>
  );
}