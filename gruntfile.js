module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			html: {
				files: "*.html"
			},
			css: {
				files: "css/*.css"
			},
			less: {
				files: "less/*.less",
				tasks: "less"
			}
		},
		less: {
			development: {
				options: {
					compress: true
				},
				files: {
					"css/terminal.css": "less/terminal.less"
    			}
  			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-less");
};