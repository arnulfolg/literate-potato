/**
 * grunt-contrib-copy options
 * @type {Object}
 */

module.exports = {
	scripts: {
		files: [{
			expand: true,
			cwd: '<%= folders.dev %>/',
			src: [
				'**/*.js',
				'**/*.json'
			],
			dest: '<%= folders.dist %>'
				}]
	},
	bower_libs: {
		files: [
			{ /* Bower and vendor stuff */
				expand: true,
				flatten: true,
				cwd: '<%= folders.root %>',
				dest: '<%= folders.dist %>/vendor',
				src: [
						'dev/vendor/**.*',
						'bower_components/jquery/dist/jquery.js',
						'bower_components/jquery/dist/jquery.min.js',
						'bower_components/chart.js/dist/Chart.js',
						'bower_components/chart.js/dist/Chart.min.js',
						'bower_components/angular/angular.min.js',
						'bower_components/angular-sanitize/angular-sanitize.min.js',
						'bower_components/angular-ui-router/release/angular-ui-router.min.js',
						'bower_components/angular-animate/angular-animate.min.js',
						'bower_components/ng-table-bundle/ng-table.min.js',
						'bower_components/ng-table-bundle/ng-table.min.css',
						'bower_components/angular-chart.js/dist/angular-chart.js',
						'bower_components/angular-chart.js/dist/angular-chart.min.js',
						'bower_components/svg-injector/dist/svg-injector.min.js',
						'bower_components/downloadjs/download.min.js',
						'bower_components/bootstrap/dist/css/bootstrap.min.css',
						'bower_components/cleave.js/dist/cleave-angular.min.js'
					]
		}]
	},
	assets: {
		files: [
			{ /* Bower and vendor stuff */
				expand: true,
				flatten: false,
				cwd: '<%= folders.dev %>/assets',
				dest: '<%= folders.dist %>/assets',
				src: [
						'**/*.png',
						'**/*.jpg',
						'**/*.otf',
						'**/*.woff',
						'**/*.woff2',
						'**/*.ttf',
						'**/*.eot',
						'**/*.svg'
					]
		}]
	}
};
