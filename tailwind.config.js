module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    // './js/**/*.js',
    './index.html',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': { 'min': '250px', 'max': '767px' },
    }
  },
  plugins: [],
}
