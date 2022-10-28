/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'red-special' : 'rgba(231, 29, 54, 1)',
      },
      height:{
        '11/12': '90%',
      }

    },
  },
  plugins: [],
}
