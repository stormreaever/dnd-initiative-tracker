var gulp = require('gulp');

var 
    sass = require('gulp-sass');
  

gulp.task('styles', function() {
  gulp.src('css/src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/build'));
});


//Watch task
gulp.task('watch', function() {
  gulp.watch('css/src/**/*.scss',['styles']);
});

gulp.task('default', ['styles']);