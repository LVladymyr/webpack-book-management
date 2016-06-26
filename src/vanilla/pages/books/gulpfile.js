var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    path = require('path'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    configs = require(path.resolve('../../', 'webpack.config')),
    webpackStream = require('webpack-stream'),
    processorArray = [
        require('autoprefixer')()
    ];


var ENTRY_POINT = {
    hostPort: {
        js: '1234',
        css: '4321',
        host: 'localhost'
    },
    js: {
        entry: {
            app: '../pages/books/app.js'
        }
    },
    css: {
        entry: {
            app: '../assets/styles/pages/books/books.scss'
        }
    }
};

/**
 * production tasks runner
 */
gulp.task('js-production', function() {
    return gulp.src('./app.js')
        .pipe(webpackStream(configs))
        .pipe(gulp.dest('dist/'));
});

gulp.task('css-production', function () {
    return gulp.src('../../assets/styles/pages/books/books.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss(processorArray))
        .pipe(gulp.dest('../../assets/styles/pages/books/'));
});


/**
 * development tasks runner
 * Javascript
 */
gulp.task('webpack-dev-server-js', function(callback) {
    var jsConfigs = Object.assign(configs, ENTRY_POINT.js);
    // Start a webpack-dev-server
    new WebpackDevServer(webpack(jsConfigs), {})
        .listen(ENTRY_POINT.hostPort.js, ENTRY_POINT.hostPort.host, function(err) {
            if (err) throw new gutil.PluginError('webpack-dev-server', err);

            gutil.log('[webpack-dev-server]',
                `http://${ENTRY_POINT.hostPort.host}:${ENTRY_POINT.hostPort.js}/${configs.output.filename}`);
        });
});

/**
 * development tasks runner
 * CSS
 */
gulp.task('webpack-dev-server-css', function(callback) {
    configs.output['publicPath'] = `http://${ENTRY_POINT.hostPort.host}:${ENTRY_POINT.hostPort.css}/`;

    var cssConfigs = Object.assign(configs, ENTRY_POINT.css);
    // Start a webpack-dev-server
    new WebpackDevServer(webpack(cssConfigs), {})
        .listen(ENTRY_POINT.hostPort.css, configs.devServer.host, function(err) {
            if (err) throw new gutil.PluginError('webpack-dev-server', err);

            gutil.log('[webpack-dev-server]',
                `http://${ENTRY_POINT.hostPort.host}:${ENTRY_POINT.hostPort.css}/${configs.output.filename}`);
        });
});

/**
 * watch files changed
 */
gulp.task('watch', function() {
    gulp.watch(path.ALL, ['webpack']);
});

gulp.task('books-dev-css', ['webpack-dev-server-css', 'watch']);
gulp.task('books-dev-js', ['webpack-dev-server-js', 'watch']);
gulp.task('books-production', ['js-production', 'css-production']);
