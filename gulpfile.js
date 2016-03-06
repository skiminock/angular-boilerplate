var gulp    = require('gulp'),
	connect = require('gulp-connect'),
	inject  = require('gulp-inject'),
	rename  = require('gulp-rename');
	//concat  = require('gulp-concat'),
	//ngmin   = require('gulp-ngmin'),
	//uglify  = require('gulp-uglify'),

gulp.task('connect', function () {
    connect.server({
        root: '.',
        port: 3000,
        host: '127.0.0.1',
        fallback: 'index.html',
        livereload: true
    });
});

gulp.task('set-index', function(){
	gulp.src("layout.html").pipe(rename("index.html")).pipe(gulp.dest("."));
});

gulp.task('js-dev', function () {
    var sources = gulp.src([ 'app/**/*.module.js', 'app/**/*.js'], { read: true });
    return gulp.src('index.html').pipe(inject(sources)).pipe(gulp.dest('.'));
});

gulp.task('watch-dev', function() {
    gulp.watch('app/**/*.js', ['js-dev']);
});

gulp.task('default', [ 'connect', 'set-index', 'js-dev', 'watch-dev' ]);
