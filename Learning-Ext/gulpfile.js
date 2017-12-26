var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function(err){
  if(err){
    console.log(err);
  }
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish' , {
      verbose: true
    }));
});



gulp.task('serve', ['style'], function(){
  var options = {
    script: 'index.js',
    delayTime: 1,
    env: {
      'PORT': 3000
    },
    watch: ['*.js', 'src/**/*.js', 'src/**/*.html' ]
  };

  return nodemon(options)
      .on('restart', function(){
        console.log('Restarting...');
      })
      .on('crash', function(){
        console.log('Application has crashed');
      });
});
