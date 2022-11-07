'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

exports.scss = () => {
  console.log('> scss')
  return gulp.src('./src/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
};

exports.html = () => {
  console.log('> html')
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./build/'));
};

exports.files = () => {
  console.log('> files')
  return gulp.src('./src/assets/**/*.*', { base: './src/assets/' })
    .pipe(gulp.dest('./build/assets/'));
}

exports.js = () => {
  console.log('> js')
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./build/js/'));
};

exports.serve = () => {
  console.log('> serve')
  browserSync.init({
    server: "./build"
  });

  gulp.watch("src/scss/**/*.scss", gulp.series('scss'));
  gulp.watch("src/*.html", gulp.series('html'))
  gulp.watch("src/js/*.js", gulp.series('js'))
  gulp.watch("src/assets/**/*.*", gulp.series('files'))
  
  gulp.watch("build/*.html").on('change', browserSync.reload);
}

