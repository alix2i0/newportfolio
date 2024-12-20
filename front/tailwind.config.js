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
      screens: {
        'xs': '480px',   // Custom breakpoint for extra small devices
        'sm': '640px',   // Existing small breakpoint (unchanged)
        'md': '768px',   // Existing medium breakpoint (unchanged)
        'lg': '1024px',  // Existing large breakpoint (unchanged)
        'xl': '1280px',  // Existing extra-large breakpoint (unchanged)
        '2xl': '1536px', // Existing 2x-large breakpoint (unchanged)
        '3xl': '1800px', // Custom breakpoint for very large screens
        'max-xl': {'max': '1280px'},
      'max-lg': {'max': '1024px'},
      'max-md': {'max': '768px'},
      'max-sm': {'max': '640px'},
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


