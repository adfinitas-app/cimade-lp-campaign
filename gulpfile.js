var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var browserSync = require('browser-sync');
var inky = require('inky');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var concatCss = require('gulp-concat-css');

gulp.task('browser-sync', function() {
    browserSync({
	server: {
	    baseDir: "./"
	}
    });
    gulp.watch("./inky/*.html", ['conversion-html']);
    gulp.watch("./css/*.css", ['conversion-css']);
    gulp.watch("*.html", ['bs-reload']);
    gulp.watch("./css/*", ['bs-reload']);
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['browser-sync'], function(){
    gulp.watch("src/styles/**/*.scss", ['styles']);
    gulp.watch("*.html", ['bs-reload']);
});

gulp.task('conversion-css', function () {
    return gulp.src('./css/*.css')
	.pipe(sourcemaps.init())
	.pipe(autoprefixer())
	.pipe(concat('all.css'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./css/converted/'));
});

gulp.task('conversion-html', function () {
    return gulp.src('./inky/*.html')
	.pipe(inky())
	.pipe(gulp.dest('./converted/'));
});
