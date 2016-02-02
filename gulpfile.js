var gulp    = require('gulp'),
	connect = require('gulp-connect'),
	inject  = require('gulp-inject'),
    concat = require('gulp-concat');

gulp.task('js-dev', function () {

    var target = gulp.src('./index.html');
    var sources = gulp.src([ 'app/**/*.module.js', 'app/**/*.js'], {read: true});    
    return target.pipe(inject(sources)).pipe(gulp.dest('.'));
    
});

gulp.task('connect', function () {

    connect.server({
        root: '.',
        port: 3000,
        host: '127.0.0.1',
        fallback: 'index.html',
        livereload: true
    });

});

gulp.task('default', ['connect', 'js-dev']);
