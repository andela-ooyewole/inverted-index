const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const browserSyncTests = require('browser-sync').create();
const karma = require('karma').Server;
const path = require('path');
const shell = require('gulp-shell');

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
    ], ['build-tests']);
  gulp.watch('./jasmine/spec/bundled-inverted-index-test.js', reloadT);
});

gulp.task('karma', ['build-tests'], (done) => {
  karma.start({
    configFile: path.resolve('karma.conf.js'),
    singleRun: true
  }, () => {
    done();
  });
});

gulp.task('build-tests', shell.task([
  './node_modules/.bin/webpack webpack.config.js'
]));

// run test
gulp.task('test', ['karma']);

// default task
gulp.task('default', ['watch']);
