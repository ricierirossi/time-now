const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return (
    src("assets/blue-wave/index.scss")
      .pipe(sass())
      // .pipe(purgecss({ content: ["**/*.vue"] }))
      .pipe(dest("assets/blue-wave/css"))
  );
}

function watchTask() {
  watch(["assets/blue-wave/**/*.scss", "**/*.vue"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
