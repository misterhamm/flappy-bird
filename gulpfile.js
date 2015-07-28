var gulp = require('gulp');

var jshint = require('gulp-jshint');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var util = require('gulp-util');

//Javascript linting task
gulp.task('jshint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//Watch Task
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['jshint']);
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('css/*.css', ['css']);
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

/*gulp.task('entities', function() {
    return gulp.src('js/entities/*.js')
        .pipe(concat('entities.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('components', function() {
    return gulp.src('js/components/graphics/*.js')
        .pipe(concat('components.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('systems', function() {
    return gulp.src('js/systems/*.js')
        .pipe(concat('systems.js'))
        .pipe(uglify().on('error', util.log))
        .pipe(gulp.dest('build/js'));
});*/

//Default Task
gulp.task('default', ['jshint', 'watch']);
          
//Build Task
gulp.task('build', ['jshint', 'scripts', 'browserify'/*'entities', 'components', 'systems'*/]);
