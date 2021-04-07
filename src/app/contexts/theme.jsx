import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";

import theme from "../config/theme";
// import { ThemeProvider as ThemeProviderMaterial } from "@material-ui/styles";

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
