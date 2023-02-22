/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purper: '#9C69E2',
        pink: '#F063B8'
      },
      textColor: {
        title: '#212353',
        bio: '#4B5D68'
      },
      fontFamily: {
        helvetica: ['Helvetica'],
        avenir: ['Sen']
      }
    }
  },
  plugins: []
}
