import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { ccTheme } from "./theme";
import Home from './Home';

export default function Main() {
  return (
    <ThemeProvider theme={ccTheme}>
      <Home />
    </ThemeProvider>
  );
}