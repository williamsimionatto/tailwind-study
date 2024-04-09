const { colors } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        gray: {
          ...colors.gray,
          '900': '#181818',
        }
      },
      spacing: {
        '50': '20rem',
      },
    },
  },
  plugins: [],
}
