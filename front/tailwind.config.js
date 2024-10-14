/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        hexagon: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      },
      boxShadow: {
        'glow': '0 0 10px blue',
      },
      animation: {
        'popup-expand': 'popupExpand 1s ease-in-out forwards',
      },
      keyframes: {
        popupExpand: {
          '0%': { height: '0%', opacity: '0' }, // Start as a thin line in the middle
          '100%': { height: '50%', opacity: '1' }, // Expand halfway
          // '100%': { height: '100%', opacity: '1' }, // Fully expanded
        },
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.clip-path-hexagon': {
          'clip-path': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        },
      })
    }),
  ],
}


