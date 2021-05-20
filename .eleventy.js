const yaml = require("js-yaml");

module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addDataExtension("yaml", yaml.safeLoad);

    return {
        dir: {
            layouts: "layouts",
            data: "data"
        }
    }
}
