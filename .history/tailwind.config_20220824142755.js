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
        ApercuBold: 'ApercuBold, sans',
        ApercuMedium: 'ApercuMedium, sans',
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
