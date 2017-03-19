/**
 * Created by Julius Alvarado on 3/18/2017.
 */

var gulp = require ('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function(){
    console.log("ello world ^_^/");
    gulp.watch('styles/**/*.scss', ['styles']);
});

gulp.task('styles', function(){
    gulp.src('styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(gulp.dest('./styles'));
});

//