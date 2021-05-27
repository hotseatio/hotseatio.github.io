const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.200'),
            h1: {
              color: theme('colors.gray.50'),
            },
            h2: {
              color: theme('colors.gray.50'),
            },
            h3: {
              color: theme('colors.gray.50'),
            },
            h4: {
              color: theme('colors.gray.50'),
            },
            code: {
              color: theme('colors.gray.50'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
