/**
* grunt-contrib-clean options
* @type {Object}
*/

module.exports = {
  build: {
    files: [{
      dot: true,
      src: [
        '<%= folders.tmp %>',
        '<%= folders.dist %>/*',
        '!<%= folders.dist %>/.git*'
      ]
    }]
  },
  css: {
    files: [{
      dot: true,
      src: [
        '<%= folders.dist %>/css/*.min.css'
      ]
    }]
  },
  js: {
    files: [{
      dot: true,
      src: [
        '<%= folders.dist %>/js/*.min.js'
      ]
    }]
  },
  server: '<%= folders.tmp %>'
};
