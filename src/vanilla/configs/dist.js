'use strict';

var baseConfig = require('./base');
var webpack = require('webpack');

var config = Object.assign({}, baseConfig, {
    cache: false,
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"dist"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourceMap: false
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin()
      ],
});


module.exports = config;