const gulp = require('gulp');
const uglify=require('gulp-uglify-es').default;
const csso=require('gulp-csso');
const autoprefixer=require('gulp-autoprefixer');
var htmlmin = require('gulp-html-minifier');

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
  });

  gulp.task('default',gulp.series('message','minifyHtml','jsMin','cssMin'));
