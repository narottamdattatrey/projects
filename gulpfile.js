//Dependencies
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

//methods
//gulp-uglify minified the javascript file.
gulp.task('default', function() {
    gulp.src('development/personal-website/**/*.js')
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist'));
});
