const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const browserSyncTests = require('browser-sync').create();

const reload = browserSync.reload;
const reloadT = browserSyncTests.reload;

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './src',
      index: 'index.html'
    },
    port: process.env.PORT || 8000,
    ui: false,
    ghostMode: false
  });
});

gulp.task('browser-sync-tests', () => {
  browserSyncTests.init({
    server: {
      baseDir: ['./src', './jasmine'],
      index: 'SpecRunner.html'
    },
    port: 8888,
    ui: false,
    ghostMode: false,
    // open: false
  });
});

gulp.task('watch', ['browser-sync', 'browser-sync-tests'], () => {
  gulp.watch('src/*.js', reload);
  gulp.watch('src/*.css', reload);
  gulp.watch('src/*.html').on('change', reload);
  gulp.watch(
    [
      './src/inverted-index.js',
      './jasmine/spec/inverted-index-test.js'
    ], reloadT);
});

gulp.task('default', [
  'browser-sync','browser-sync-tests', 'watch'
]);
