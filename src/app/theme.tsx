"use client";

import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#84c317",
      },
      secondary: {
        main: "#f58f29",
      },
      background: {
        default: "#13141F",
      },
    },
    shape: {
      borderRadius: 16,
    },
  })
);
