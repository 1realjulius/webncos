/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        ShpockMabryBold: 'ShpockMabryBold, sans-serif',
        ShpockMabryRegular: 'ShpockMabryRegular, sans-serif',
      },
    },
  },
  plugins: [],
}
