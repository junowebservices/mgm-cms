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
        secondaryBg: "#fafcffb3",
        mainColor: {
          DEFAULT: "#9EB68E",
          dark: "#758E4D",
          light: "#BCC7C2",
        },
        SecondaryColor: {
          DEFAULT: "#FFBD8F",
          dark: "#D3A47F",
          light: "#FDF1E7",
        },
        mainOrange: "#e0630e",
        mainYellow: "#f3b52e",
        mainBlue: "#1589c2",
        // textColor2: "#69635C",
        // DarkTextColor: "#e5e5e5",
        // DarksecondaryTextColor: "#6B6675",
        // shadowColor: "#E6E9F1",
      },
    },
  },
  plugins: ["gatsby-plugin-postcss"],
};
