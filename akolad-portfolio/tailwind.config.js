/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    borderWidth: {
      '1': '1px',
    },
    backdropFilter: {
      none: 'none',
      'blur-100': 'blur(5px)',
      'blur-200': 'blur(10px)',
      'blur-300': 'blur(30px)',
      'blur-400': 'blur(50px)',
      'blur-500': 'blur(70px)',
      'blur-600': 'blur(100px)',
      'blur-700': 'blur(150px)',
      'blur-800': 'blur(200px)',
      'blur-900': 'blur(400px)',
    },
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
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
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
    },
  },
  plugins: [require('tailwindcss-filters')],
};
