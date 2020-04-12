var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');
var extname = require('gulp-extname');
var assemble = require('assemble');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');
var webserver = require('gulp-livereload');
var path    = require('path');
var fs = require("fs");
var app = assemble();
var obj = JSON.parse(fs.readFileSync("site/_data/data.json", { encoding:"utf8" }));
gulp.task('load', function(cb) {
  app.partials('site/partials/*.hbs');
  app.layouts('site/_layouts/pc.hbs');
  app.pages('site/_doc/*.pc.hbs');
  cb();
});
gulp.task('assemble', gulp.series( gulp.parallel('load'),function(){
  //明示的なreturnが必要
  return app.toStream('pages')
    .pipe(plumber())
    .pipe(app.renderFile({layout:'pc',obj:obj}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({basename:'index'}))
    .pipe(extname('.html'))
    .pipe(app.dest('dist/'));
}));