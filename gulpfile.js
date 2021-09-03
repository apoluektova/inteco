const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const sync = require("browser-sync").create();
const magicImporter = require("node-sass-magic-importer");

// Styles
const styles = () => {
  return gulp
    .src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass({ importer: magicImporter() }).on("error", sass.logError))
    .pipe(postcss([autoprefixer(), csso()]))
    .pipe(sourcemap.write("."))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
};

exports.styles = styles;

// HTML
const html = () => {
  return gulp
    .src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
};

// Copy
const copy = () => {
  return gulp
    .src(
      [
        "source/fonts/*.{woff2,woff}",
        "source/img/*.ico",
        "source/img/**/*.{jpg,png,svg}",
      ],
      {
        base: "source",
      }
    )
    .pipe(gulp.dest("build"));
};

exports.copy = copy;

// Clean
const clean = () => {
  return del("build");
};

exports.clean = clean;

// Server
const server = (done) => {
  sync.init({
    server: {
      baseDir: "build",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

exports.server = server;

// Reload
const reload = (done) => {
  sync.reload();
  done();
};

// Watcher
const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html", gulp.series(html, reload));
};

// Build
const build = gulp.series(
  clean,
  gulp.parallel(styles, html, copy)
);

exports.build = build;

exports.default = gulp.series(
  clean,
  gulp.parallel(styles, html, copy),
  gulp.series(server, watcher)
);
