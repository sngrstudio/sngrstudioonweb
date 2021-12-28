module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-font-magician')({
      foundries: 'google',
      display: 'swap'
    }),
    require('postcss-preset-env')
  ],
}
