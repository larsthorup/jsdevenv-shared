/*global module*/
module.exports = function (grunt) {
    'use strict';

    var sharedPath = './node_modules/jsdevenv-shared/node_modules/';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // convenience
    grunt.registerTask('default', ['lint']);
    grunt.registerTask('all', ['lint']);

    // lint
    grunt.loadTasks(sharedPath + 'grunt-contrib-jshint/tasks');
    gruntConfig.jshint = {
        options: { bitwise: true, camelcase: true, curly: true, eqeqeq: true, forin: true, immed: true,
            indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, plusplus: true,
            quotmark: true, regexp: true, undef: true, unused: true, strict: true, trailing: true,
            maxparams: 3, maxdepth: 2, maxstatements: 50},
        all: [
            'Gruntfile.js',
            'src/**/*.js',
            '!src/lib/**/*',
            '!src/test/lib/**/*'
        ]
    };
    grunt.registerTask('lint', 'jshint');

    return gruntConfig;
};