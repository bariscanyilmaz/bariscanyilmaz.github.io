const gulp = require('gulp');
const browserSync = require("browser-sync").create();

function reload() {
    browserSync.reload();
}

function style(){
    return gulp.src('./css/*.css').pipe(browserSync.stream())
}



function watch() {
    browserSync.init({

        server: {
            baseDir: "./"
        }
    });


    gulp.watch('./css/*.css', style);
    gulp.watch('./js/*.js').on('change', reload);
    gulp.watch('./index.html').on('change', reload);

}

exports.default = watch;