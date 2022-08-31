/** @type {import('tailwindcss').Config} */ 
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '100':'40rem'
      },
      colors:{
        'cyan': colors.cyan,
        'teal': colors.teal
    },
  },
  plugins: [],
}
}