module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        sngr: {
          primary: '#507dc1',
          secondary: '#b71f91',
          accent: '#d60180',
          neutral: '#1b1d1d',
          'base-100': '#fefefe',
        },
      },
    ],
  },
}
