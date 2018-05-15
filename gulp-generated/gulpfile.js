var gulp=require('gulp');
var gutil=require('gulp-util');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var clean=require('gulp-rimraf');
var cleanCSS=require('gulp-clean-css');
var imagemin=require('gulp-imagemin');
var mocha=require('gulp-mocha');
var coffee=require('gulp-coffee');
var sass=require('gulp-sass');

gulp.task('js1',function(){
    gulp.src('src/js/*.js')
    .pipe(concat('all1.js'))
    .pipe(gulp.dest('dist/js/'));
});