module.exports = function (eleventyConfig) {
 eleventyConfig.addPassthroughCopy({ "public/logo.svg": "logo.svg" });

  return {
    dir: {
      input: ".",
      includes: "_includes"
    }
  };
};
