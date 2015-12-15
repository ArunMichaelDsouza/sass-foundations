module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false,
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'build/css/main.css': 'src/sass/main.scss'
                }
            }
        },
        watch: {
            cssWatch: {
                files: ['src/sass/main.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
