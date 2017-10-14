// 引用 gulp plugin
var gulp = require('gulp'),
    gulpUglify = require('gulp-uglify'),
    gulpSass = require('gulp-sass'), 
    gulpImagemin = require('gulp-imagemin'),
    gulpPlumber = require('gulp-plumber'),
    gulpNotify = require("gulp-notify");  // 載入 gulp-notify
    gulpLivereload = require('gulp-livereload');  // 載入 gulp-livereload


    


gulp.task('watch', function () {
	gulpLivereload.listen();
    gulp.watch('js/original/*.js', ['scripts']);
    gulp.watch('sass/*.scss', ['styles']);
    gulp.watch('images/original/**', ['images']);
});



gulp.task('script', function () {
    gulp.src('js/original/*.js')        // 指定要處理的原始 JavaScript 檔案目錄
    	.pipe(gulpPlumber())  
        .pipe(gulpUglify())                     // 將 JavaScript 做最小化
        .pipe(gulp.dest('js/minify'))
        .pipe(gulpLivereload());                // 當檔案異動後自動重新載入頁面
});



gulp.task('styles', function () {
    gulp.src('sass/*.scss')    // 指定要處理的 Scss 檔案目錄
    	.pipe(gulpPlumber())  
        .pipe(gulpSass({          // 編譯 Scss
            outputStyle: 'compressed'
        }))       // 編譯 Scss
        .pipe(gulp.dest('css'))
        .pipe(gulpLivereload());                // 當檔案異動後自動重新載入頁面
});



gulp.task('images', function () {
    gulp.src('images/original/**')   
    	.pipe(gulpPlumber())  
        .pipe(gulpImagemin())
        .pipe(gulp.dest('images/minify'))
        .pipe(gulpLivereload());                // 當檔案異動後自動重新載入頁面
});






