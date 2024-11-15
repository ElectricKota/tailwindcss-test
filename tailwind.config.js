/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '50dvh': '50dvh', // Přidání vlastní hodnoty min-height 50dvh
      },
      screens: {
        xs: {min:'28rem'},}
    },
  },
  plugins: [],
}