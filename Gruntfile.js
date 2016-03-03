/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	var base = grunt.option('base') || '.';

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner:
				'/*!\n' +
				' * Engerau project' +
				' *\n' +
				' * Copyright (C) 2016 Karol Kleibl\n' +
				' */'
		},

		/* qunit: {
			files: [ 'test/*.html' ]
		}, */

		uglify: {
			options: {
				banner: '<%= meta.banner %>\n'
			},
			build: {
				src: 'js/engerau.js',
				dest: 'js/engerau.min.js'
			}
		},

		sass: {
			core: {
				files: {
					'css/engarau.css': 'css/engarau.scss',
				}
			} /*,
			themes: {
				files: [
					{
						expand: true,
						cwd: 'css/theme/source',
						src: ['*.scss'],
						dest: 'css/theme',
						ext: '.css'
					}
				]
			} */
		}, 

		autoprefixer: {
			dist: {
				src: 'css/reveal.css'
			}
		},


		cssmin: {
			compress: {
				files: {
					'css/engerau.min.css': [ 'css/engerau.css' ]
				}
			}
		},

		jshint: {
			options: {
				curly: false,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true,
				expr: true,
				globals: {
					head: false,
					module: false,
					console: false,
					unescape: false,
					define: false,
					exports: false,
					"$": false
				}
			},
			files: [ 'Gruntfile.js', 'js/engerau.js' ]
		},

		connect: {
			server: {
				options: {
					port: port,
					base: base,
					livereload: true,
					open: true
				}
			}
		},

		zip: {
			'engerau.zip': [
				'map.html',
				'css/**',
				'js/**',
				'**.md'
			]
		},

		watch: {
			options: {
				livereload: true,
				nospawn: true
			},
			js: {
				files: [ 'Gruntfile.js', 'js/engerau.js', 'js/gmap3.js' ],
				tasks: 'js'
			},
			/* theme: {
				files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
				tasks: 'css-themes'
			}, */
			css: {
				files: [ 'css/engerau.css' ],
				tasks: 'css-core'
			},
			html: {
				files: [ 'map.html']
			},
			markdown: {
				files: [ './*.md' ]
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-qunit' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	// grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-autoprefixer' );
	grunt.loadNpmTasks( 'grunt-zip' );

	// Default task
	grunt.registerTask( 'default', [ 'css', 'js' ] );

	// JS task
	grunt.registerTask( 'js', [ 'jshint', 'uglify' /*, 'qunit' */] );

	// Theme CSS
	// grunt.registerTask( 'css-themes', [ 'sass:themes' ] );

	// Core framework CSS
	grunt.registerTask( 'css-core', [ /* 'sass:core', */'autoprefixer', 'cssmin' ] );

	// All CSS
	grunt.registerTask( 'css', [ /* 'sass', */'autoprefixer', 'cssmin' ] );

	// Package presentation to archive
	grunt.registerTask( 'package', [ 'default', 'zip' ] );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

	// Run tests
	grunt.registerTask( 'test', [ 'jshint' /*, 'qunit' */] );

};
