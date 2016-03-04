module.exports = function (grunt) {

    grunt.initConfig({
        /**
         * ngTemplates
         * 16/1/22 */
        ngtemplates: {
            app: {
                cwd: 'Public/js/app/Document/publicDirective/html/',
                src: '*.html',
                dest: 'Public/js/app/Document/publicDirective/html/dist/app.js',
                options: {
                    prefix: '/Public/js/app/Document/publicDirective/html/',
                    standalone: 'myApp'
                }
            },

            front: {
                cwd: 'Public/js/app/Document/publicDirective/html/front/',
                src: '*.html',
                dest: 'Public/js/app/Document/publicDirective/html/dist/appFront.js',
                options: {
                    prefix: '/Public/js/app/Document/publicDirective/html/front/',
                    standalone: 'myApp'
                }
            }
        },

        /**
         * 合并
         * 16/1/22 */
        concat: {
            dist: {
                src: ['Public/js/app/Document/publicDirective/html/dist/*.js'],
                dest: './end.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['ngtemplates', 'concat']);


};