/**
* grunt-contrib-pug options
* @type {Object}
*/

module.exports = {
	compile: {
		files: [{
			expand: true,
			cwd: '<%= folders.dev %>/',
			src: ['**/*.pug'],
			dest: '<%= folders.dist %>',
			ext: '.html'
		}],
		options: {
			client: false,
			pretty: true,
			basedir: '<%= folders.dev %>/jade'
		}
	}
};