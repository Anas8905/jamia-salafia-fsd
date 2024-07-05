/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        'dark-cyan': '#003447',
        'golden': '#E5B45B'
      }
    },
  },
  plugins: [],
}
