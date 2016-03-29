"use strict"

let gulp = require("gulp")
let stylus = require("gulp-stylus")
let sourcemaps = require("gulp-sourcemaps")
let clean = require('gulp-clean')

gulp.task('cssOne', () => {
    return gulp.src('src/css/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('build/css'))
})

gulp.task('cssWatch', () => {
    gulp.watch('src/css/**/*.styl', gulp.series('cssOne'))
})

gulp.task('clean', function(callback) {
    if(!fs.existsSync('build'))
        return callback()

    return gulp.src('build', {read: false})
        .pipe(clean())
})