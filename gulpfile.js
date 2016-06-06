/**
 * Created by bhuvanmalik on 14/12/15.
 */

var gulp = require('gulp'),
    nodemon = require('nodemon');

gulp.task('default', function(){
    nodemon({

        "scripts": {
            "start": "nodemon"
        },
        ext: 'js',

        ignore: ['./node_modules/**']
    }).on('restart', function(){
        console.log('restarting..');
    });
});

