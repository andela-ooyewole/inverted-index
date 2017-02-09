const gulp = require('gulp');
const bs = require('browser-sync').create();

gulp.task('browser-sync', () => {
  bs.init({
    server: {
      baseDir: 'src',
      index: 'index.html'
    },
    port: process.env.PORT || 3000,
    ui: false,
    ghostMode: false
  });
});

gulp.task('default', [
  'browser-sync'
]);
