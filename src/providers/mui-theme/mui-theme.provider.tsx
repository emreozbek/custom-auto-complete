import React from "react";
import { MuiThemeContext } from "./mui-theme.context";
import { useMuiThemeLogic } from "./mui-theme.logic";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import lightTheme from "@config/theme/light.theme-options";
import { GlobalStyles } from "@providers/mui-theme/mui-theme.styles";

type Props = {
  children: React.ReactNode;
};
export const MuiThemeProvider: React.FC<Props> = ({ children }) => {
  const logic = useMuiThemeLogic();

  return (
    <MuiThemeContext.Provider
      value={logic}
      children={
        <ThemeProvider theme={createTheme(lightTheme)}>
          <CssBaseline />
          <GlobalStyles />
          {children}
        </ThemeProvider>
      }
    />
  );
};
