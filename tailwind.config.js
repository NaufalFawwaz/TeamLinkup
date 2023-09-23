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
        'gray-text': '#949494',
      },
    },
  },
  plugins: [],
}