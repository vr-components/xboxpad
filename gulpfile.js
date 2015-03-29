var gulp = require('gulp');
var gulpif = require('gulp-if');
var clean = require('gulp-clean');
var order = require('gulp-order');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var stylish = require('jshint-stylish');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var flags = require('minimist')(process.argv.slice(2));

// Gulp command line arguments
var production = flags.production || false;
var debug = flags.debug || !production;
var watch = flags.watch;

gulp.task('build',  ['clean'], function() {
  // Single entry point to browserify
  gulp.src(['src/*.js', 'vendor/*.js'])
      .pipe(order([ // The order of concatenation
        'vendor/mappings.js',
        'vendor/gamepadmapping.js',
        'vendor/evt.js',
        'src/main.js'
      ], {base: '.'}))
      .pipe(gulpif(debug, sourcemaps.init()))
      .pipe(gulpif(production, uglify()))
      .pipe(concat('xboxpad.js'))
      .pipe(gulpif(debug, sourcemaps.write()))
      .pipe(gulp.dest('./build/'))
      .pipe(gulpif(watch, livereload()));
});

gulp.task('lint', function() {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

gulp.task('clean', function() {
   return gulp.src(['./build'], {read: false})
          .pipe(clean({force: true}));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/*', ['lint', 'build']);
});

gulp.task('default', ['clean', 'lint', 'build']);
