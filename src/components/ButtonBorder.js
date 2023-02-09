import { Button, ThemeProvider } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import mgmTheme from "../../site/settings/theme";

const ButtonBorder = ({ text, color, type }) => {
  return (
    // <button
    //   className={`py-2 uppercase border-2 bg-transparent px-4 border-${color} text-${color} md:min-w-[130px] font-semibold`}
    // >
    //   {text}
    // </button>
    <ThemeProvider theme={mgmTheme}>
      <Button
        variant={type ? type : "outlined"}
        color={color ? color : "primary"}
        // sx={{ borderRadius: 0, color: "#e0630e", borderColor: "#e0630e" }}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonBorder;
