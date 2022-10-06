// .storybook/preview.js

import React from "react";
import { ThemeProvider } from "styled-components";

export const decorators = [
  (Story) => (
    <ThemeProvider
      theme={{
        colors: {
          danger: "#f44336",
          primary100: "#2196f3",
          primary200: "#0b7dda",
        },
      }}
    >
      <Story />
    </ThemeProvider>
  ),
];
