module.exports = {
  content: ["./**/*.njk", "./src/**/*.css", "./*.njk"],
  theme: {
    extend: {
  colors: {
    suav: '#63b8e7',         // Your signature blue
    backdrop: '#0f0f0f',     // Console black
    whisper: '#f1f1f1',      // Soft white
    accent: '#e11d48'        // Optional red for emphasis if needed
 },
fontFamily: {
  sans: ['Helvetica Neue', 'sans-serif']
}
    }
  },
  plugins: [],
};
