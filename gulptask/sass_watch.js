/* ***********************************
gulp の使い方
コマンド
npx gulp
タスクが自動実行される。
ctrl + cでパッチ終了
https://ics.media/entry/3290/
------------------------------------*/

// gulpプラグインを読み込みます
var gulp = require("gulp");
// Sassをコンパイルするプラグインを読み込みます
const sass = require("gulp-sass");

/**
 * Sassをコンパイルするタスクです
 */

gulp.task('sass', function(){
  return (
  gulp.src("site/_scss/style.scss")
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("htdoc/_css/_common/"))
    );
});


