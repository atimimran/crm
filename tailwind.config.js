/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    extend: {
      colors: {
        'custom-primary': '#5c5c0a', 
        'custom-secondary': '#789abc',
      },
    },
  },
  plugins: [],
  
}
