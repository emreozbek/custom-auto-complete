import React from "react";
import { MuiThemeProvider } from "@providers/mui-theme/mui-theme.provider";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@components/app/app.routes";

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider>
        <AppRoutes />
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
