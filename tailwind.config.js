/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'dark': '#111827',
        'primary1': '#F7FBFC',
        'primary2': '#C9D8DA',
        'primary3': '#0E4751',
        'success' : '#07982F',
        'success-2': '#00EF0A',
        'gray-text': '#949494',
        'gray-text-2': '#A1A1A1'
      },
    },
  },
  plugins: [],
}