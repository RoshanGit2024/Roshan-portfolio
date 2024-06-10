/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary':'rgb(85 81 277)',
        'secodary':'#2b2d77',
      }
    },
    fontFamily:{
      'hero-font':'Poppins'
    }
  },
  plugins: [],
}

