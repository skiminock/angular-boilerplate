var gulp    = require('gulp'),
	connect = require('gulp-connect'),
	inject  = require('gulp-inject');

gulp.task('connect', function () {

    connect.server({
        root: '.',
        port: 3000,
        host: '127.0.0.1',
        fallback: 'index.html',
        livereload: true
    });

});

gulp.task('default', ['connect']);
