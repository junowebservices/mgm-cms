import { createTheme } from "@mui/material";

// A custom theme for this app
const mgmTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e0630e",
    },
    secondary: {
      main: "#f3b52e",
    },
    warning: {
      main: "#f3b52e",
    },
    info: {
      main: "#202020",
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default mgmTheme;
