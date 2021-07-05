module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#2EBAAE',
      dark: '#3C3B3B',
      muted: '#8A8A8A',
      white: '#FFFFFF',
      gray: '#E2E2E2',
      background: '#F4F4F4',
      icons: '#AAAAAA',
      // ...
    },
    extend: {
      backgroundColor: ['group-focus'],
      borderColor: ['group-focus'],
    },
    fontFamily: {
      'display': ['Raleway', 'Helvetica', 'sans-serif'],
      'body': ['Raleway', 'Helvetica', 'sans-serif'],
      'raleway': ['Raleway', 'Helvetica', 'sans-serif'],
    },
    letterSpacing: {
      widest: '.3em',
      wider: '.15em',
      wide: '.1em',
    },
    fontSize: {
      'xs': '.7rem',
      'sm': '.8rem',
      'base': '.9rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
