module.exports = {
  content: ["./**/*.njk", "./src/**/*.css", "./*.njk"],
  theme: {
    extend: {
      colors: {
        sujooo: '#e11d48',
        backdrop: '#0f0f0f',
        whisper: '#f1f1f1'
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'sans-serif'],
      }
    }
  },
  plugins: [],
};
