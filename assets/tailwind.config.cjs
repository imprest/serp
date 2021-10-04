const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: "jit",
  purge: [
      '../**/live/*.ex',
      '../**/live/*.html.heex',
      '../**/views/*.ex',
      '../**/templates/**/*.html.heex',
      'js/**/*.{html,js,svelte,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#fff',
        primary: colors.red,
        secondary: colors.indigo,
        warning: colors.yellow,
        gray: colors.gray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
