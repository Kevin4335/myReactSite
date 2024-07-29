/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      colors: {
        'a-cream':'#F8E9A1',
        'a-nav': '#3a456e',
        'a-sky': '#A8D0E6',
        'second-blue':'#374785',
        'primary-blue':'#24305E',
        'footer':'#1d264b',
        'footer-text':'#50597e',
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'display': ['Francois One', 'sans-serif'],
      },
    },

  },
  
  plugins: [
    
    require('daisyui'),
    require('tailwind-scrollbar')({ nocompatible: true }),

  ],
}

