/**
* grunt-contrib-watch options
* @type {Object}
*/

module.exports =  {
	options: {
		livereload: true
	},
	markup: {
		files: ['dev/**/*.pug'],
		tasks: ['clear', 'pug:compile'],
	},
	styles: {
		files: ['dev/**/*.scss'],
		tasks: ['clear', 'css_watcher_tasks'],
	},
	scripts: {
		files: ['dev/**/*.js'],
		tasks: ['clear', 'js_watcher_tasks'],
	},
	build: {
		files: ['Gruntfile.js', 'tasks/*.js'],
		tasks: ['clear', 'jshint:grunt'],
	},
	copy_assets: {
		files: ['bower.json', 'tasks/copy.js', 'dev/assets/images/**/*.*'],
		tasks: ['clear', 'copy:bower_libs', 'copy:assets'],
	},
};