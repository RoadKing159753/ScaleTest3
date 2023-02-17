module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-prefix-selector': {
      prefix: '.apps-notifications',
      exclude: [/:root.*/],
    },
  },
}
