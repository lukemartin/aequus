# Load required libraries
gulp       = require 'gulp'
gutil      = require 'gulp-util'
coffee     = require 'gulp-coffee'
concat     = require 'gulp-concat'
livereload = require 'gulp-livereload'
sourcemaps = require 'gulp-sourcemaps'


# Gulp tasks
gulp.task 'coffee', ->
  gulp.src './src/*.coffee'
    .pipe sourcemaps.init()
    .pipe coffee({ bare: false }).on('error', gutil.log)
    .pipe sourcemaps.write()
    .pipe concat('aequus.js')
    .pipe gulp.dest('./build')
    .pipe livereload()


# Default tasks
gulp.task 'default', ['coffee'], ->
  gulp.watch './src/**/*.coffee', ['coffee']