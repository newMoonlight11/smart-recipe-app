/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./*.tsx",
    "./*.ts",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6DAA63",
        primaryDark: "#4F8A45",
        background: "#FAFAF7",
        textPrimary: "#1E1E1E",
        textSecondary: "#6B7280",
        accent: "#D97B5D",
      },
    },
  },
  plugins: [],
};