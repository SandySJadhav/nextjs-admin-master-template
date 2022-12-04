/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        base: "#191C24",
        secondary: "#f2f2f2",
        sidebar: "#0f172a1a",
      },
      colors: {
        primary: "#5f75cc",
        base: "#191C24",
        danger: "#EB1616",
      },
      textColor: {
        base: "#191C24",
      },
      borderColor: {
        base: "#0f172a1a",
      },
    },
  },
  plugins: [],
};
