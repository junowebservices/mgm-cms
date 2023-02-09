import { Button, createTheme, ThemeProvider } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const buttonTheme = createTheme({
  palette: {
    type: "dark",
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
      main: "#1589c2",
    },
    text: {
      primary: "#202020",
    },
  },
  shape: {
    borderRadius: 0,
  },
});

const ButtonBorder = ({ text, color }) => {
  return (
    // <button
    //   className={`py-2 uppercase border-2 bg-transparent px-4 border-${color} text-${color} md:min-w-[130px] font-semibold`}
    // >
    //   {text}
    // </button>
    <ThemeProvider theme={buttonTheme}>
      <Button
        variant="outlined"
        color="primary"
        // sx={{ borderRadius: 0, color: "#e0630e", borderColor: "#e0630e" }}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonBorder;
