const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');

// copy All HTML files
gulp.task('copyHtml', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));

});

// Optimize images
gulp.task('imagemin', () => {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));

});

// Compile Sass
gulp.task('sass', () => {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/css'));
});

// Concat and minify JS files
gulp.task('concat', () => {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'));
});

const production = gulp.series('sass', 'copyHtml', 'imagemin');
gulp.task('production', production);