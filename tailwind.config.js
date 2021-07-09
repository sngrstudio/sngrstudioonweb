module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,svelte}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
