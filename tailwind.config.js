/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        mainBg: "#f7f8f2",
        secondaryBg: "#eeeeee",
        mainOrange: {
          DEFAULT: "#e0630e",
          dark: "#b04e0b",
          light: "#f48d47",
        },
        mainYellow: {
          DEFAULT: "#f3b52e",
          dark: "#c98d0c",
          light: "#f7cf76",
        },
        mainBlue: {
          DEFAULT: "#1589c2",
          dark: "#0e587d",
          light: "#3ab0ea",
        },
        mainTextColor: "#202020",
        secondaryTextColor: "#464646",
        DarkTextColor: "#e5e5e5",
        DarksecondaryTextColor: "#6B6675",
        shadowColor: "#E6E9F1",
      },
      fontFamily: {
        Playfair: ["Playfair Display", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Arial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: ["gatsby-plugin-postcss", require("@tailwindcss/line-clamp")],
};
