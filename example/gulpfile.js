var gulp = require('gulp');
var injectSvg = require('gulp-inject-svg');

gulp.task('injectSvg', function() {

  return gulp.src('src/**/*.html')
    .pipe(injectSvg())
    .pipe(gulp.dest('public/'));

});

gulp.task('default', ['injectSvg'], function() {
}); 
