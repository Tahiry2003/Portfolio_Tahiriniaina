/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#7b7b7b",
        tertiary: "#f8f8f8",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
}