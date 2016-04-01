var less = require('gulp-less');
var gulp = require('gulp');
var path = require('path');
var config = require('../config').less;

gulp.task('less', function () {
  return gulp.src(config.src)
  .pipe(less({
    paths: [ path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(gulp.dest(config.dest));
});
