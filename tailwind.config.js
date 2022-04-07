module.exports = {
  content: [
    './src/**/*.{html,js}',
    './docs/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
