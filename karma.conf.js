let webpackConfig = require('./webpack.config');

module.exports = config => {
  config.set({
    frameworks: ["jasmine"],
    files: [
      // all files ending in "_test"
      { pattern: "*.spec.js", watched: false }
      // each file acts as entry point for the webpack configuration
    ],

    exclude: [
        'node_modules'
    ],

    preprocessors: {
      // add webpack as preprocessor
      "*.spec.js": ["webpack"]
    },
    colors: true,
    browsers: ['ChromeHeadless'],
    webpack: webpackConfig
  });
};
