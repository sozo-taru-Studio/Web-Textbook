
var gulp = require("gulp");
var requireDir = require('require-dir');

requireDir('./gulptask',{recurse: true});

gulp.task('default',
  gulp.series(
    gulp.parallel(
      //'assemble_pc',
      //'copy',
      //'watch',
      'ass',
      'sass'
    )
  )
);