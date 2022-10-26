
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
 
gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

const cleanCSS = require('gulp-clean-css');
 
gulp.task('css', () => {
  return gulp.src('src/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
 
gulp.task('default', function () {
    gulp.src('src/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});