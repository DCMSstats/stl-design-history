module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require("@x-govuk/govuk-eleventy-plugin"), {
    stylesheets: ["/styles/application.css"],
    headingPermalinks: true,
    header: {
      logotype: false,
      productName: "Short Term Lets Design history",
      search: {
        indexPath: "/search.json",
        sitemapPath: "/sitemap",
      },
    },
    url:
      process.env.GITHUB_ACTIONS &&
      "https://dcmsstats.github.io/stl-design-history/",
  });

  // Passthrough
  eleventyConfig.addPassthroughCopy({ "./app/images": "." });

  eleventyConfig.addCollection("service-design", (collection) => {
    return collection.getFilteredByGlob("app/posts/service-design/*.md");
  });

  // Config
  return {
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "app",
      layouts: "_layouts",
      includes: "_components",
    },
    pathPrefix: process.env.GITHUB_ACTIONS && "/stl-design-history/",
  };
};
