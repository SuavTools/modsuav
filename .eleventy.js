module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public/logo.svg": "logo.svg" });
  eleventyConfig.addPassthroughCopy({ "public/intro.mp3": "intro.mp3" });

  return {
    dir: {
      input: ".",
      includes: "_includes"
    }
  };
};
