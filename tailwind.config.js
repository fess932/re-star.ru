module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    mode: 'all',
    content: ['./themes/restar/**/*.{js,jsx,ts,tsx,html,md}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
