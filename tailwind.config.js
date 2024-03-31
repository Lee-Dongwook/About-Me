/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#4FD1C5",
        secondary: "#F56565",
        accent: "#ECC94B",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
