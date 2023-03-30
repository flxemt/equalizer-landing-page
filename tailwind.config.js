/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        cyan: '#66E2DC',
        orange: '#FA7453',
        yellow: '#FFB964',
        'show-white': '#FCFAF9',
        'dark-blue': '#191826'
      }
    },
    fontSize: {
      h1: '5.5rem',
      h2: '2.5rem',
      'body-1': '1.25rem',
      'body-2': '1rem'
    },
    lineHeight: {
      h1: '5.5rem',
      h2: '3.25rem',
      'body-1': '2.125rem',
      'body-2': '1.625rem'
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif']
    },
    backgroundImage: {
      'main-mobile': 'url("/bg-main-mobile.png")',
      'main-tablet': 'url("/bg-main-tablet.png")',
      'main-desktop': 'url("/bg-main-desktop.png")',
      pattern: 'url("/bg-pattern-1.svg")',
      'pattern-2': 'url("/bg-pattern-2.svg")'
    },
    backgroundPosition: {
      'top-right': 'right -220px top -250px',
      'top-right-tablet': 'right -80px top -250px',
      'top-right-desktop': 'right -170px top -250px'
    },
    borderRadius: {
      default: '12px'
    },
    screens: {
      md: '768px',
      xl: '1190px'
    }
  },
  plugins: []
}
