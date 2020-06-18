const webpackCfg = require('./webpack.config');
webpackCfg.devtool = 'inline-source-map';
webpackCfg.mode = 'development';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: ['src/index.ts', './tests/Runtime.spec.js'],
    plugins: [
      'karma-mocha',
      'karma-chai-plugins',
      'karma-chrome-launcher',
      'karma-webpack',
    ],
    webpackServer: {
      noInfo: true,
    },
    webpack: webpackCfg,
    reporters: ['progress'],
    preprocessors: {
      'src/index.ts': ['webpack'],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
  });
};