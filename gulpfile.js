const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function comprimeImg() {
  return gulp
    .src("./src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

function comprimeJS() {
  return gulp
    .src("./src/*js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/scripts"));
}

function compilaSass() {
  return gulp
    .src("./src/styles.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

exports.default = function () {
  gulp.watch(
    "./src/*.scss",
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );
  gulp.watch("./src/*js", { ignoreInitial: false }, gulp.series(comprimeJS));
  gulp.watch(
    "./src/images/*",
    { ignoreInitial: false },
    gulp.series(comprimeImg)
  );
};
