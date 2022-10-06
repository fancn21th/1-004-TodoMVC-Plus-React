import { commonTheme } from "../common-theme";

interface Theme {
  colors: any;
}

export const lightTheme: Theme = {
  colors: {
    // alternative: "#f6ecfc",
    danger: "#f44336",
    // neutral: "#ffffff",
    primary100: "#2196f3",
    primary200: "#0b7dda",
    // secondary: "#eaf5ff",
    // success: "#eafbe7",
    // warning: "#fdf4dc",
  },
  ...commonTheme,
};
