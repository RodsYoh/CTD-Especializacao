/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open-sans", "sans-serif"],
      },
      colors: {
        danger: "#e74c3c",
        sucess: "#27ae60",
        background: "#050915",
      },
    },
  },
  plugins: [],
};