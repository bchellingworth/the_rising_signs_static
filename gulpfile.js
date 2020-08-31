const {watch, src, dest, parallel} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const gulp = require('gulp');

function sassTask() {
	return src('./assets/scss/application.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: false,
			remove: false,
			grid: false,
			flexbox: false,
			supports: false
		}))
		// .pipe(minifyCSS())
		.pipe(dest('./assets/dist/css'))
}


function js() {
	return src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/slick-carousel/slick/slick.min.js',
		'./assets/js/slick.js',
		'./assets/js/application.js'
	])
		.pipe(concat('application.js'))
		.pipe(dest('./assets/dist/js/'))
}

function watcher() {
	watch('./assets/scss/**/*.scss', sassTask);
	watch('./assets/js/app.js', js);
}

exports.watcher = watcher;
exports.js = js;
exports.sassTask = sassTask;
exports.default = parallel(sassTask, js);