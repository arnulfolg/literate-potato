/*jshint strict:false */
/* global require, module */

(function() {
	"use strict";
	var path = require('path'),
			folders = {
				app: 'app',
				dist: 'dist',
				root: '.',
				tmp: '.tmp',
				dev: 'dev'
			};

	module.exports = function(grunt) {
		
		require('time-grunt')(grunt);

		require('load-grunt-config')(grunt, {
			configPath: path.join(process.cwd(), 'tasks'),
			data: {
				folders: folders
			},
			init: true
		});
	};
})();