const NavbarTop = require("./src/_includes/components/NavbarTop.js");
const NavbarSide = require("./src/_includes/components/NavbarSide.js");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "./src/_includes/assets/": "./src/assets" });
    eleventyConfig.addPassthroughCopy({ "./src/_includes/css/": "./src/css" });

    eleventyConfig.addWatchTarget("./src/_includes/css");

    eleventyConfig.addShortcode("NavbarTop", NavbarTop);
    eleventyConfig.addShortcode("NavbarSide", NavbarSide);

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEgnine: 'njk',
        dataTemplateEgnine: 'njk',
    };
}