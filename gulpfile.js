const gulp = require('gulp')
const browsersync = require('browser-sync').create() 
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')

const css = function (done) {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsersList: ['last 10 versions'],
            cascade: false,
        }))
        .pipe(gulp.dest('./src/css'))
        .pipe(browsersync.stream())
    done()
}

function browserReload(done) {
    browsersync.reload()
    done()
}

function sync(done) {
    browsersync.init({
        server: {
            baseDir: "./src",
            // index: "index.html"
        },
        port: 3000
    })
    done()
}

function watchFiles(done) {
    gulp.watch("./src/scss/**/*.scss", css)
    gulp.watch("./**/*.html", browserReload);
    done()
}

gulp.task('default', gulp.parallel(sync, css, watchFiles))