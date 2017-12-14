/**
* grunt-jshint options
* @type {Object}
*/

module.exports =  {
	options: {
		force: true,
		esversion: 6
	},
	scripts: ['dev/**/*.js', '!dev/vendor/*.js'],
	grunt: ['gruntfile.js', 'grunt/*.js']
};