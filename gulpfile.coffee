# Load required libraries
gulp       = require 'gulp'
gutil      = require 'gulp-util'
coffee     = require 'gulp-coffee'
concat     = require 'gulp-concat'
header     = require 'gulp-header'
livereload = require 'gulp-livereload'
sourcemaps = require 'gulp-sourcemaps'
uglify     = require 'gulp-uglify'
pkg        = require('./package.json')
banner     = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');


# Gulp tasks
gulp.task 'coffee', ->
  gulp.src './src/*.coffee'
    .pipe sourcemaps.init()
    .pipe coffee({ bare: false }).on('error', gutil.log)
    .pipe sourcemaps.write()
    .pipe concat("#{pkg.name}.js")
    .pipe gulp.dest('./dest')
    .pipe livereload()

gulp.task 'compress', ->
  gulp.src './src/*.coffee'
    .pipe coffee({ bare: false }).on('error', gutil.log)
    .pipe concat("#{pkg.name}.js")
    .pipe header(banner, { pkg: pkg })
    .pipe gulp.dest('./dest')
    .pipe uglify()
    .pipe concat("#{pkg.name}.min.js")
    .pipe header(banner, { pkg: pkg })
    .pipe gulp.dest('./dest')


# Default tasks
gulp.task 'default', ['coffee'], ->
  gulp.watch './src/**/*.coffee', ['coffee']
gulp.task 'package', ['compress']