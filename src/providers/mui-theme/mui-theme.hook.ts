import { useContext } from "react";
import { MuiThemeContext } from "./mui-theme.context";
import { MuiThemeContextModel } from "./mui-theme.types";

export const useMuiTheme = () =>
  useContext<MuiThemeContextModel>(MuiThemeContext);
