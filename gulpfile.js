var gulp    = require('gulp'),
	connect = require('gulp-connect'),
	inject  = require('gulp-inject'),
    concat  = require('gulp-concat'),
    ngmin   = require('gulp-ngmin'),
    uglify  = require('gulp-uglify');

/*------------------------------------server---------------------------------------*/

gulp.task('connect', function () {

    connect.server({
        root: '.',
        port: 3000,
        host: '127.0.0.1',
        fallback: 'index.html',
        livereload: true
    });

});

/*------------------------------------dev js only---------------------------------------*/

gulp.task('js-dev', function () {

    var target = gulp.src('./index.html');
    var sources = gulp.src([ 'app/**/*.module.js', 'app/**/*.js'], {read: true});    
    return target.pipe(inject(sources)).pipe(gulp.dest('.'));
    
});

/*-------------------------------------prod js only----------------------------------------*/

gulp.task('build-js-prod', function () {
    
    return gulp.src([ 'app/**/*.module.js', 'app/**/*.js'])
        .pipe(concat('build/scripts.js'))
    	 //.pipe(ngmin({dynamic: false}))
        .pipe(uglify())
        .pipe(gulp.dest('.'))
    
});

gulp.task('js-prod', ['build-js-prod'], function () {
    
    var target = gulp.src('./index.html');
    var sources = gulp.src('build/scripts.js', {read: true});    
    return target.pipe(inject(sources)).pipe(gulp.dest('.'));
    
});

/*-------------------------------------variants----------------------------------------*/

gulp.task('uncompressed', ['connect', 'js-dev' /* css-dev */]);

gulp.task('compressed', ['connect', 'js-prod' /* css-prod */]);

gulp.task('watch-dev', function() {
    gulp.watch('app/**/*.js', ['js-dev']);
    //watch dev css
});

gulp.task('watch-prod', function() {
    gulp.watch('app/**/*.js', ['js-prod']);
    //watch prod css
});

/*---------------------------------------main-------------------------------------------*/

gulp.task('dev', [
    'uncompressed',
    'watch-dev'
]);

gulp.task('prod', [
    'compressed',
    'watch-prod'
]);

gulp.task('default', function() {
  console.log('no actions. use \'dev\' or \'prod\' tasks ')
});


