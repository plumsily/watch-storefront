/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      archivo: ["Archivo", "Helvetica", "Arial", "sans-serif"],
      caudex: ["Caudex", "serif"],
    },
  },
  plugins: [],
  darkMode: "class",
};
