/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens:{
        'xs': '320px',
      }
      // extends screens breakpoints
     
  },
  plugins: [
    require('flowbite/plugin')
  ],
}}
