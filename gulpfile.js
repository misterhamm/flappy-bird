var gulp = require('gulp');

var jshint = require('gulp-jshint');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var util = require('gulp-util');
var browserSync = require('browser-sync').create();

//Javascript linting task
gulp.task('jshint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//Watch Task
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['jshint']);
    gulp.watch('css/*.css', ['css']);
});

// Static Server + watching scss/html files
gulp.task('serve', ['scripts'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./build/app.js").on('change', browserSync.reload);
    gulp.watch("./css/*.css").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

//JavaScript build task, removes whitespace and concatenates files
gulp.task('scripts', function() {
    return gulp.src('js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify());
});

//browserify task
gulp.task('browserify', function() {
    return browserify('./js/main.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('./js/app.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'));
});



//Default Task
gulp.task('default', ['jshint', 'watch']);
          
//Build Task
gulp.task('build', ['jshint', 'scripts', 'browserify']);

//Build and Browser-Sync
gulp.task('display', ['jshint', 'scripts', 'browserify', 'serve']);
