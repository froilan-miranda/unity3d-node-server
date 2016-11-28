"use strict";

let gulp = require('gulp');
let jshint = require('gulp-jshint');

gulp.task('default',['jshint','test','serve']);

gulp.task('jshint',()=>{
	return gulp.src('./*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
})
.task('test',()=>{
	require('./test.js');
})
.task('serve',()=>{
	require('./main.js');
});