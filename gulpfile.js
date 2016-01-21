var path = require('path');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var ts = require('gulp-typescript');
var del = require('del');

const configs = {
    index: 'client/index.html',
    output: 'build',
    serverTs: 'server/**/*.ts',
    clientTs: 'client/**/*.ts',
    nodeDependencies: [
        'angular2/bundles/angular2-polyfills.js',
        'systemjs/dist/system.src.js',
        'rxjs/bundles/Rx.js',
        'angular2/bundles/angular2.dev.js',
        'angular2/bundles/router.dev.js'
    ]
};


/* Clean the output folder*/
gulp.task('clean', function () {
    return del(configs.output);
});

/** Build Server ***********/
gulp.task('build:server', function () {
    var tsProject = ts.createProject('server/tsconfig.json');
    var tsResult = gulp.src(configs.serverTs)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))

    return tsResult.js
        .pipe(concat('server.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(configs.output))
});

/* CLIENTS **/
gulp.task('build:index', function () {
    var mapPaths = configs.nodeDependencies.map(f=> {
        return path.resolve('node_modules', f);
    });
    var jsDependencies = gulp.src(mapPaths, { base: 'node_modules' })
        .pipe(gulp.dest(configs.output + '/libs'));

    var copyIndex = gulp.src(configs.index)
        .pipe(gulp.dest(configs.output));
    return [jsDependencies, copyIndex];
});

gulp.task('build:app', function () {
    var tsProject = ts.createProject('client/tsconfig.json');
    var tsResult = gulp.src(configs.clientTs)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return tsResult.js
    //.pipe(concat("main.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(configs.output));
});

gulp.task('build', function (callback) {
    runSequence('clean', 'build:server', 'build:index', 'build:app', callback);
});

gulp.task('default', ['build']);
