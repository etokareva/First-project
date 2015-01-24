
var gulp = require('gulp'),
	connect = require('gulp-connect'),
	opn = require('opn');

gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true
	});
	opn('http://localhost:8080/');
});

gulp.task('html', function() {
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('css', function() {
	gulp.src('./app/css/*.css')
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['./app/css/*.css'], ['css']);
});

gulp.task('default', ['connect', 'watch']);

// var gulp = require('gulp');
// var sass = require('gulp-sass');

// gulp.task('sass', function () {
//     gulp.src('./scss/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./css'));
// });