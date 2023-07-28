const { tailwindRadixPlugin } = require("tailwindcss-radix-colors-plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "radix",
  theme: {
    extend: {},
  },
  plugins: [tailwindRadixPlugin(), require("@tailwindcss/forms")],
};
