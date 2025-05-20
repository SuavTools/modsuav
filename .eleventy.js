module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      input: ".",
      includes: "_includes"
    }
  };
};
