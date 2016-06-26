'use strict';

let webpack = require('webpack'),
    path = require('path');

const PATHS = {
    app: path.join(__dirname, './app'),
    build: path.join(__dirname, './dist'),
    srcPath: path.join(__dirname, '/../')
};

const CONFIGS = {
    preLoaders: [{
        test: /\.(js)$/,
        include: PATHS.srcPath,
        loader: 'eslint-loader'
    }],
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-1']
            }
        },
        {
            test: /\.html/, loader: 'html'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        },
        {
            test: /\.sass/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        },
        {
            test: /\.scss/,
            loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
        },
        {
            test: /\.(png|jpg|gif)(\?[a-z0-9]+)?$/,
            loader: 'url-loader?limit=8192'
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }
    ],
    extensions: [
        '',
        '.js',
        '.jsx'
    ]
}

module.exports = {
    context: __dirname,
    devServer: {
        outputPath: PATHS.build,
        host: 'localhost',
        port: 1234,
        stats: { colors: true },
        publicPath: '/assets/'
    },
    output: {
        path: PATHS.build,
        sourceMapFilename: './main.js.map',
        filename: 'main.js'
    },
    module: {
        loaders: CONFIGS.loaders
    },
    resolve: {
        extensions: CONFIGS.extensions,
        alias: {
            root: PATHS.srcPath,
            app: PATHS.srcPath,
            assets: PATHS.srcPath + '/assets/',
            fonts: PATHS.srcPath + '/assets/fonts/',
            images: PATHS.srcPath + '/assets/images/',
            styles: PATHS.srcPath + '/assets/styles/',
            pages: PATHS.srcPath + '/pages/',
            data: PATHS.srcPath + '/data/'
        }
    },
    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ])
    ]
}