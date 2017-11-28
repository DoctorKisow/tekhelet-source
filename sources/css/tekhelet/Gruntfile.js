// Tekhelet - The look of the Kisow Foundation.
// Matthew R. Kisow, D.Sc. <matthew.kisow@kisow.org>
// Copyright 2015-2017, Kisow Foundation, Inc.

'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                options: {
                    strictMath: true,
                },
                files: {
                    "dist/tekhelet.css": "less/tekhelet.less"
                }
            },
            minify: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "dist/tekhelet.min.css": "dist/tekhelet.css"
                }
            }
        },
        replace: {
            compile: {
                options: {
                    patterns: [
                        {
                            match: /^(.*\r?\n)*\/\* tekhelet-start \*\/\r?\n/gm,
                            replacement: ""
                        }
                    ]
                },
                files: [
                    {expand: true, flatten: true, src: ['dist/tekhelet.css'], dest: 'dist/'}
                ]
            }
        },
        sed: {
            inject_variables: {
                path: '../bootstrap/less/bootstrap.less',
                pattern: /@import "variables\.less";$/m,
                replacement: '@import "variables.less"; @import "../../tekhelet/bootstrap/variables-tekhelet.less";'
            }
        },
        shell: {
            build_bootstrap: {
                command: 'grunt dist',
                options: {
                    stdout: true,
                    execOptions: {
                        cwd: '../bootstrap/'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-replace");
    grunt.loadNpmTasks("grunt-sed");
    grunt.loadNpmTasks("grunt-shell");

    grunt.registerTask("compile", ["less:compile", "replace:compile"]);
    grunt.registerTask("compress", ["less:minify"]);
    grunt.registerTask("bootstrap", ["sed:inject_variables", "shell:build_bootstrap"]);

    grunt.registerTask("dist", ["bootstrap", "compile", "compress"]);
    grunt.registerTask("default", ["dist"]);
};
