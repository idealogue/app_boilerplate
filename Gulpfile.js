
var gutil           = require('gulp-util'),
    sass            = require('gulp-sass'),
    gulp            = require('gulp'),
    browserify      = require('gulp-browserify'),
    concat          = require('gulp-concat')
    embedlr         = require('gulp-embedlr'),
    refresh         = require('gulp-livereload'),
    lrserver        = require('tiny-lr')(),
    express         = require('express'),
    livereload      = require('connect-livereload'),
    prefix          = require('gulp-autoprefixer'),
    livereloadport  = 35729,
    serverport      = 8080;


// server --------------------------------- //

var server = express();

server.use(livereload({
  port: livereloadport
}));

server.use(express.static('./build'));

gulp.task('serve', function() {
  server.listen(serverport);
  lrserver.listen(livereloadport);
});

// main tasks ------------------------------ //

gulp.task('styles', function(){
  gulp.src('./app/application.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest('./build/assets/css/'))
    .pipe(refresh(lrserver));
});

gulp.task('scripts', function(){
  gulp.src(['./app/application.js'])
    .pipe(browserify())
    .pipe(gulp.dest('./build/assets/js/'))
    .pipe(refresh(lrserver));
});

gulp.task('html', function(){
  gulp.src('./app/index.html')
    .pipe(gulp.dest('./build/'))
    .pipe(refresh(lrserver));
});

gulp.task('assets', function(){
  gulp.src('./app/assets/**/*')
    .pipe(gulp.dest('./build/assets/'))
    .pipe(refresh(lrserver));
});

// watch ---------------------------------- //

gulp.task('watch', function() {

  gulp.watch(['app/**/*.scss'], ['styles']);
  gulp.watch(['app/**/*.js', '!app/**/node_modules/**/*'], ['scripts']);
  gulp.watch('app/assets/**', ['assets']);
  gulp.watch('app/index.html', ['html']);

});

// build ---------------------------------- //

gulp.task('build', ['html', 'scripts', 'styles', 'assets']);

// gulp ---------------------------------- //

gulp.task('default', ['scripts', 'styles', 'html', 'assets', 'serve', 'watch']);
