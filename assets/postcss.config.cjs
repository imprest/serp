module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nested')),
    require('tailwindcss')({ config: 'tailwind.config.cjs' }),
    require('autoprefixer')
  ]
}