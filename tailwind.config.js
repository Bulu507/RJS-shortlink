const { colors: defaultColors } = require('tailwindcss/defaultTheme');
const defaultTheme  = require('tailwindcss/defaultTheme');

const newColors = {
    ...defaultColors,
    ...{
        'primary': '#555555',
        'secondary': '#aaaaaa',
        'unimportant': '#cccccc',
        'text-disable': '#bfbfbf',
        'btn-disable': '#e0e0e0',
        'accent': '#eb4a42',
        'light': '#eaeaea',
    },
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        'auto': 'auto',
        'negative': -1,
        '0': 0,
      },
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        'logo' : 'Montserrat',
      }
    },
    colors: newColors,
    borderRadius: {
      DEFAULT: '3px',
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      outline: ['hover', 'active'],
    },
    scrollbar: ['rounded']
  },
  plugins: [],
}
