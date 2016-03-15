var gulp        = require('gulp');
var browserSync = require('browser-sync');

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('browser-reload', function() {
    browserSync.reload();
});



/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_site/css/**/*', ['browser-reload']);
    gulp.watch('_site/img/**/*', ['browser-reload']);
    gulp.watch('_site/js/**/*', ['browser-reload']);
    gulp.watch('_site/*.html', ['browser-reload']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);