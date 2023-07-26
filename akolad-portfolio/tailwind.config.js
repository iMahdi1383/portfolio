/** @type {import('tailwindcss').Config} */
import tailwindcss_3d from "tailwindcss-3d";

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        title: 'kalameh',
        sans: [
          'dana',
          'system-ui',
          'BlinkMacSystemFont',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      colors: {
        primary: '#000c13',
        secondary: '#a6acc3',
        tertiary: '#000a25',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
      },
      keyframes: {
        slide: {
          '0%': {display: 'flex'},
          '1%': { transform: 'translateY(0)'},
          '99%': { transform: 'translateY(100%)'},
          '100%': {display: 'none'}
        }
      },
      animation: {
        slideoin: 'slide 1s ease-out reverse',
        slideout: 'slide 1s ease-out',
      }
    },
  },
  plugins: [
    tailwindcss_3d,
  ],
};
