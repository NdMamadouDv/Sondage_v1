/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#46BF33",
          secondary: "#626DE7",
          accent: "#19166A",
          neutral: "#46BF33",
          "base-100": "#ffffff",
          primary500: "#46BF33",
          primary400: "#5FD04E",
          primary300: "#A7E69E",
          secondary500: "#19166A",
          secondary400: "#0D1A8A",
          secondary300: "#12439F",
          secondary200: "#626DE7",
          noir: "#0D0A1B",
          blanc: "#FAF7F4",
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
