'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');
let del = require('del');

let paths = {
  dist: 'dist',
  lib: 'lib',
  src: [
    'src/**/*.js',
    '!src/**/__tests__/**/*.js',
    '!src/**/__mocks__/**/*.js'
  ]
};

gulp.task('clean', function() {
  return del([paths.dist, paths.lib]);
});

gulp.task('modules', function() {
  return gulp
    .src(paths.src)
    .pipe(babel())
    .on('error', (error) => console.log('error', error))
    .pipe(gulp.dest(paths.lib));
});

gulp.task('watch', function(cb) {
  gulp.watch('src/**/*.js',  gulp.series('modules'));
});

gulp.task('default', gulp.series('clean', 'modules'));
