var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var extname = require('gulp-extname');
var assemble = require('assemble');
var plumber = require('gulp-plumber');
var path    = require('path');
var fs = require("fs");
var app = assemble();
var obj = JSON.parse(fs.readFileSync("src/_data/data.json", { encoding:"utf8" }));
gulp.task('load', function(cb) {
  app.partials('src/_partials/*.hbs');
  app.layouts('src/_layouts/pc.hbs');
  app.pages('src/_doc/*.hbs');
  cb();
});

gulp.task('ass', gulp.series( gulp.parallel('load'),function(){
  //明示的なreturnが必要
  return app.toStream('pages')
    .pipe(plumber())
    .pipe(app.renderFile({layout:'pc',obj:obj}))
    //.pipe(htmlmin({collapseWhitespace: true}))
    //.pipe(rename())
    .pipe(extname('.html'))
    .pipe(app.dest('htdoc/'));
}));