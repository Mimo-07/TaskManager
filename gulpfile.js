var gulp = require("gulp");
gulp.task("Copy-dist-to-wwwroot", () => {
    return gulp.src("./dist/task-manager/browser/**/*")
    .pipe(gulp.dest("C:\\Mimo\\Software Dev\\ASP .NET Core\\MVCTaskManager\\wwwroot"));
});

gulp.task("default", () => {
    gulp.watch("./dist/task-manager/browser", gulp.series("Copy-dist-to-wwwroot"));
});