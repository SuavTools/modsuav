module.exports = {
  content: [
    "./*.njk",
    "./_includes/**/*.njk",
    "./src/**/*.{js,css,html}"
  ],
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
