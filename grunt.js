/*global module:false*/
module.exports = function (grunt) {

grunt.loadNpmTasks('grunt-coffee');

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:ratify.jquery.json>',
        meta: {
            banner: '/* <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= pkg.codename %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' <%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
                ' * <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },
        coffee: {
            spec: {
                src: ['spec/*.coffee'],
                options: {
                    bare: false
                }
            },
            source: {
                src: ['src/*.coffee'],
                options: {
                    bare: false
                }
            }
        },
        concat: {
            dist: {
                src: [
                    '<banner:meta.banner>',
                    'src/ratify-core.js',
                    'src/ratifiers.js'
                ],
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>-<%= pkg.smallCode %>.js'
            }
        },
        min: {
            dist: {
                src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>-<%= pkg.smallCode %>.min.js'
            }
        },
        watch: {
            files: [
                'src/ratify-core.js',
                'src/ratifiers.js'
            ],
            tasks: 'coffee concat min'
        },
        uglify: {}
    });

    // Default task.
    grunt.registerTask('default', 'coffee concat min');

};
