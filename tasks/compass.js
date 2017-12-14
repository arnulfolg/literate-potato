/**
* grunt-contrib-compass options
* @type {Object}
*/

module.exports = {
	dist: {
		options: {
			sassDir: 'dev/',
			cssDir: '<%= folders.dist %>',
			specify: '<%= folders.dev %>/*.scss'
		}
	}
};