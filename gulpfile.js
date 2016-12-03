//Dependencies
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
// var webserver = require('gulp-webserver');
var sass = require('gulp-sass');

//methods 
//gulp-uglify uglify the files.
//gulp-concat concat all js files and minified them.
gulp.task('scripts', function() {
    return gulp.src('development/personal-website/**/*.js')
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist/js'));
});
//always add return to above type like functions

gulp.task('watch', function(){
	gulp.watch('development/**/*.js', ['scripts']);
});
// gulp.task('webserver', function(){
// 	gulp.src('app')
// 	.pipe(webserver({
// 		livereload: true,
// 		directoryListing: true,
// 		open: true
// 	}));
// });

gulp.task('sass', function(){
	return gulp.src('development/**/*.scss')	
	.pipe(concat('vender.min.css'))
	.pipe(gulp.dest('dist/css'));
});