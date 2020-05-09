/* ---------------------------- Variables ---------------------------- */

let gulp          = require("gulp"),
    sass          = require("gulp-sass"),
    uglify        = require('gulp-uglify'),
    del           = require('del'),
    concat        = require('gulp-concat');

let DEL_LIBS_PATH = [
  'node_modules/slick-carousel/slick/slick.less',
  'node_modules/slick-carousel/slick/slick.scss',
  'node_modules/slick-carousel/slick/slick-theme.scss',
  'node_modules/slick-carousel/slick/slick-theme.less'
]

/* ---------------------------- Logic ---------------------------- */

/* ------------------ clear libs ------------------ */
gulp.task('clear-libs', function() {
   return del([
     'node_modules/slick-carousel/slick/slick.less',
     'node_modules/slick-carousel/slick/slick.scss',
     'node_modules/slick-carousel/slick/slick-theme.scss',
     'node_modules/slick-carousel/slick/slick-theme.less'
   ])
});

/* ------------------ libs ------------------ */
/* js libs */
gulp.task('libs-js', function() {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/wowjs/dist/wow.js',
    'node_modules/vue/dist/vue.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'))
});

/* css libs */
gulp.task('libs-css', function() {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/slick-carousel/slick/slick-theme.css',
    'node_modules/animate.css/animate.css',
    'node_modules/normalize.css/normalize.css'
  ])
  .pipe(concat('libs.min.css'))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('app/css'))
});


/* ------------------ default ------------------ */
gulp.task('default', gulp.parallel('clear-libs', 'libs-js', 'libs-css'));
