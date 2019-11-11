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
          100: 'hsla(224, 97%, 85%, 1)',
          200: 'hsla(224, 97%, 80%, 1)',
          300: 'hsla(224, 97%, 75%, 1)',
          400: 'hsla(224, 97%, 70%, 1)',
          500: 'hsla(224, 97%, 65%, 1)',
          700: 'hsla(224, 97%, 60%, 1)'
        },
        gray: {
          100: 'hsla(220, 43%, 97%, 1)',
          200: 'hsla(220, 43%, 93%, 1)',
          300: 'hsla(220, 43%, 85%, 1)',
          400: 'hsla(220, 43%, 80%, 1)',
          500: 'hsla(220, 43%, 75%, 1)'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
