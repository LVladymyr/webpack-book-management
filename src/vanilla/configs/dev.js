var baseConfig = require('./base');

var config = Object.assign({}, baseConfig, {
  cache: true,
  debug: true,
  devtool: 'inline-source-map',
  outputPathinfo: true,
  watch: true
});

module.exports = config;