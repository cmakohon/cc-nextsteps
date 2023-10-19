import { createTheme } from "@mui/material/styles";

export const ccTheme = createTheme({
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