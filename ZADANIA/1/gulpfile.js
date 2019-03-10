var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    imgMini = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();

var paths = {
      styles: {
        src: 'src/scss/*.scss',
        dest: 'dist/css'
      }
    }


function style() {
  return(
    gulp
      .src(paths.styles.src)
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(cssnano())
      .pipe( gulp.dest(paths.styles.dest) )
  );
}


function reload() {
  browserSync.reload();
}


function watch() {
  browserSync.init({
    browser: 'chrome.exe',
    server: {
      baseDir: './',
      notify: false,
  }
});
  gulp.watch(paths.styles.src, style);
  gulp.watch('index.html', reload);
}



exports.style = style;
exports.watch = watch;
