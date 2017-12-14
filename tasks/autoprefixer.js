/**
* grunt-autoprefixer options
* @type {Object}
*/

module.exports = {
	options: {
		browsers: ['last 2 versions']
	},
	dist: {
		expand: true,
		flatten: true,
		src: 'dist/css/*.css',
		dest: 'dist/css/'
	}
};
