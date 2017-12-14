/**
* grunt-contrib-cssmin options
* Version 0.10.0 forced
* @type {Object}
*/

module.exports = {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'dist/styles.min.css': ['dist/styles.css'],
      'dist/mobile.min.css': ['dist/mobile.css']
    }
  }
};