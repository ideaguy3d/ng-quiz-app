/**
 * Created by Julius Alvarado on 3/18/2017.
 */

var gulp = require ('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
    console.log("ello world ^_^/");
});

gulp.task('styles', function(){
    gulp.src('styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./styles'));
});

//