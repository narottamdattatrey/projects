//Dependencies
var gulp = require('gulp');
var uglify = require('gulp-uglify');

//methods
//gulp-uglify minified the javascript file.
gulp.task('default', function() {
    gulp.src('development/personal-website/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
