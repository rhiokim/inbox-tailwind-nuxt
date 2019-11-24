/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          100: 'hsla(224, 97%, 97%, 1)',
          200: 'hsla(224, 97%, 93%, 1)',
          300: 'hsla(224, 97%, 87%, 1)',
          400: 'hsla(224, 97%, 80%, 1)',
          500: 'hsla(224, 97%, 72%, 1)',
          600: 'hsla(224, 97%, 64%, 1)',
          700: 'hsla(224, 97%, 57%, 1)',
          800: 'hsla(224, 97%, 51%, 1)',
          900: 'hsla(224, 97%, 47%, 1)'
        },
        gray: {
          100: 'hsla(220, 43%, 97%, 1)',
          200: 'hsla(220, 43%, 93%, 1)',
          300: 'hsla(220, 43%, 87%, 1)',
          400: 'hsla(220, 43%, 80%, 1)',
          500: 'hsla(220, 43%, 72%, 1)',
          600: 'hsla(220, 43%, 64%, 1)',
          700: 'hsla(220, 43%, 57%, 1)',
          800: 'hsla(220, 43%, 51%, 1)',
          900: 'hsla(220, 43%, 47%, 1)'
        },
        red: {
          100: 'hsla(1, 100%, 95%, 1)',
          200: 'hsla(1, 100%, 90%, 1)',
          300: 'hsla(1, 100%, 85%, 1)',
          400: 'hsla(1, 100%, 80%, 1)',
          500: 'hsla(1, 100%, 75%, 1)',
          600: 'hsla(1, 100%, 70%, 1)',
          700: 'hsla(1, 100%, 65%, 1)',
          800: 'hsla(1, 100%, 60%, 1)',
          900: 'hsla(1, 100%, 55%, 1)'
        }
      },
      spacing: {
        '72': '18rem',
        '80': '20rem'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.8rem',
        '3xl': '2.6rem',
        '4xl': '3.4rem',
        '5xl': '4.2rem'
      }
    }
  },
  variants: {},
  plugins: []
}
