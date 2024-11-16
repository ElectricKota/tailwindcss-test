/** @type {import('tailwindcss').Config} */
import winduum from 'winduum/plugin'

export default {
  content: [
    './node_modules/winduum/src/**/*.js',
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '50dvh': '50dvh', // Přidání vlastní hodnoty min-height 50dvh
      },
      screens: {
        xs: { min: '28rem' },
      }
    },
  },
  plugins: [
    winduum({
        // config options
    })
  ],
}