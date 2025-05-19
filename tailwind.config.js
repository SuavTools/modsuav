module.exports = {
  content: ["./**/*.njk", "./src/**/*.{html,js,css}", "./*.njk"],
  theme: {
    extend: {
      colors: {
        suav: '#63b8e7',
        backdrop: '#0f0f0f',
        whisper: '#f1f1f1',
        accent: '#e11d48'
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'sans-serif']
      }
    }
  },
  plugins: [],
}
