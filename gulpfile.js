require('dotenv').config()

process.env.ABRAIA_KEY='NWM2MjRjMmRjNWMwMDAwMDpBV1RlaHJBNHdTV3NpR1ZkQThTQlJxaTdvVVhQaFJMOA=='

const gulp = require('gulp');
const uglify=require('gulp-uglify-es').default;
const csso=require('gulp-csso');
const autoprefixer=require('gulp-autoprefixer');
var htmlmin = require('gulp-html-minifier');
const cache = require('gulp-cache')
const abraia = require('gulp-abraia')


gulp.task('message',async function(){
    return console.log('Gulp Started');
});

//js minimization

gulp.task('jsMin',async ()=>{
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];
  //task
gulp.task('cssMin',async ()=>{
    gulp.src('css/*.css')
    .pipe(autoprefixer({overrideBrowserslist: AUTOPREFIXER_BROWSERS}))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('dist/css'))
});

//Minify html
gulp.task('minifyHtml', async function() {
    gulp.src('*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./dist'))
      gulp.src('/pages/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./dist/pages'))
  });


  //Optimize-videos
  gulp.task('vidMin', () => {
    return gulp.src('videos/*.mp4')
      .pipe(abraia([
      ]))
      .pipe(gulp.dest('./dist/images'))
  })


  //image responsiveness for later used

  gulp.task('variants', () => {
    return gulp.src('images/**')
      .pipe(abraia([
        { width: 1920, output: '{name}-1920.{ext}' },
        { width: 1125, output: '{name}-1125.{ext}' },
        { width: 750, output: '{name}-750.{ext}' },
        { width: 375, output: '{name}-375.{ext}' }
      ]))
      .pipe(gulp.dest('output'))
  })

  gulp.task('default',gulp.series('message','minifyHtml','jsMin','cssMin','vidMin'));
