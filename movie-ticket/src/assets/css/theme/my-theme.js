import { createMuiTheme } from "@material-ui/core";
import "./../../../index.css";

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 380,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    primary: {
      light: "#4c46e6",
      main: "#b446ff",
      dark: "#6d68fe",
      contrastText: "white",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "lato",
    fontSize: 14,
  },
  overrides: {
    // Style sheet name ⚛️
    MuiDrawer: {
      // Name of the rule
      paperAnchorRight: {
        background: "rgba(255, 255, 255, 0.9)",
      },
    },
  },
});
