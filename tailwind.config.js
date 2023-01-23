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
        mainOrange: "#e0630e",
        mainYellow: "#f3b52e",
        mainBlue: "#1589c2",
        mainText: "#202020",
      },
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: ["gatsby-plugin-postcss"],
};
