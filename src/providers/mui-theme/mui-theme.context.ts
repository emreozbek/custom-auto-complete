import { createContext } from "react";
import { MuiThemeContextModel } from "./mui-theme.types";

export const MuiThemeContext = createContext<MuiThemeContextModel>({});
