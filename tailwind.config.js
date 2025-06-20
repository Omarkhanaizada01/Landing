/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // sm: "480px",
      // md: "720px",
      // lg: "1060px",
      // xl: "1200px",

      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {
      colors: {
        primary: "#28CB8B",
        secondary: "#263238",
        info: "#2194f3",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
