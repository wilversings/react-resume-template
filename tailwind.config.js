// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '224': '56rem',
        'full-x3': '300%'
      },
      colors: {
        yellow: '#efc603',
        gold: '#cba328',
        rust: '#8d7f6b',
        darkBlue: '#0d1122'
      },

      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3C!-- svg: first layer --%3E%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.63' seed='12' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect opacity='0.15' width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
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
        'spin-slowest': 'spin 120s linear infinite'
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
