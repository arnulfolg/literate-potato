/**
* grunt-contrib-concat options
* @type {Object}
*/

module.exports = {
	options: {
		separator: '\n',
	},
	app: {
		src: [
			"dev/app.module.js",
			"dev/**/*.module.js",
		],
		dest: 'dist/app_scripts.js'
	},
	lib: {
		src: [
			"dist/vendor/angular.min.js",
			"dist/vendor/angular-*.js",
			"dist/vendor/ng-table.min.js",
		],
		dest: 'dist/app_libs.js'
	}
};
