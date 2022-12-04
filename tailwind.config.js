/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "#7e22ce",
        base: "#191C24",
        secondary: "#f2f2f2",
        sidebar: "#0f172a1a",
      },
      colors: {
        primary: "#7e22ce",
        base: "#191C24",
        danger: "#EB1616",
      },
      textColor: {
        primary: "#7e22ce",
        base: "#191C24",
      },
      borderColor: {
        primary: "#7e22ce",
        base: "#0f172a1a",
      },
    },
  },
  plugins: [],
};
