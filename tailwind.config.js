/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
// const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Source: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        Fjalla: ["Fjalla One", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#319A21",
          "primary-focus": "#46BF33",
          "primary-content": "#5FD04E",
          secondary: "#12439F",
          "secondary-focus": "#626DE7",
          "secondary-content": "#19166A",
          accent: "#EB5C03",
          "accent-focus": "#ED6B1A",
          "accent-content": "#D54110",
          neutral: "#0D0A1B",
          "neutral-focus": "#1C1638",
          "neutral-content": "#090713",
          "base-100": "#FAF7F4",
          "base-200": "#F5F1ED",
          "base-300": "#EBE9E8",
        },
      },
      "garden",
      "dark",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
