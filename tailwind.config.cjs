/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#2b3945",
        "dark-blue-500": "#202c37",
        "light-dark-blue": "	#111517",
        "light-dark-gray": "#858585",
        "light-gray-900": "#050000",
        "light-white": "#fafafa",
      }
    },
  },
  plugins: [],
};
