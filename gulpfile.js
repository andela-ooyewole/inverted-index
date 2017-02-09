const gulp = require('gulp');
const browserSync = require('browser-sync').create();

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

gulp.task('default', [
  'browser-sync'
]);
