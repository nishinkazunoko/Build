var gulp = require("gulp");
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");
var replace = require("gulp-replace");


// アンスコなしで始まる.ejsファイルは同階層のhtmlフォルダに出力してね
gulp.task("ejs", done => {
  gulp
    .src(["views/**/*.ejs", "!views/**/_*.ejs"])
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, "$1"))
    .pipe(gulp.dest("./dest/"));
  done();
});

gulp.task('watch', function () {
    gulp.watch("views/**/_*.ejs", gulp.series("ejs"));
    gulp.watch("views/**/*.ejs", gulp.series("ejs"));
});

