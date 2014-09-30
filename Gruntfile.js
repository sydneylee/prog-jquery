'use restrict';

module.exports = function(grunt) {
  // configuration
  var config = {
    app: 'public',
    dist: 'dist'
  };
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // config:{app:'public', dist:'dist'},

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            config.dist+'/*',
            config.dist+'/.git*'
          ]
        }]
      },
    },
    jshint: {
        options: {
        	jshintrc: '.jshintrc'
    	},
    	all: ['public/js/progressbar.js']
    },
    uglify: {
      compress_mangle: {
        files: {
          	'public/js/progressbar.min.js': [
            'public/js/progressbar.js'
          ]
        },
        options:{
          mangle:true,
          sourceMap: true
        }
      },
    },
    sass: {
	    dist: {
	      files: {
	        'public/css/progressbar.css': 'public/css/progressbar.scss'
	      }
	    }
	},
	cssmin: {
	  minify: {
	    expand: true,
	    cwd: 'public/css/',
	    src: ['*.css', '!*.min.css'],
	    dest: 'public/css/',
	    ext: '.min.css'
	  }
	}

  });


  // Load the plugin that provides the "clean" task.
 grunt.loadNpmTasks('grunt-contrib-clean');
  
  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-sass');
  
  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  // grunt.registerTask('default', ['clean']);
  // grunt.registerTask('default', ['clean','uglify']);
  // grunt.registerTask('default', ['clean','uglify', 'sass']);
  // grunt.registerTask('default', ['clean','uglify', 'sass', 'cssmin']);
  // grunt.registerTask('default', ['clean','jshint', 'sass', 'cssmin']);
  // grunt.registerTask('default', ['clean','jshint','uglify','sass']);
   grunt.registerTask('default', ['clean','jshint', 'uglify', 'sass', 'cssmin']);//cf. grunt sass, grunt uglify to execute any specific task 

};