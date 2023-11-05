// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '224': '56rem'
      },
      colors: {
        yellow: '#efc603',
        gold: '#cba328',
        rust: '#8d7f6b',
        darkBlue: '#0d1122'
      },

      rotate: {
        '5': '5deg',
        '10': '10deg',
        '15': '15deg',
        '20': '20deg',
        '25': '25deg',
        '30': '30deg',
        '35': '35deg',
        '40': '40deg',
        '50': '50deg',
        '55': '55deg',
        '60': '60deg',
        '65': '65deg',
        '70': '70deg',
        '75': '75deg',
        '80': '80deg',
        '85': '85deg',
      },

      animation: {
        'spin-slowest': 'spin 80s linear infinite'
      },
      keyframes: {
        typing: {
          '0%, 100%': {width: '0%'},
          '30%, 70%': {width: '100%'},
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
