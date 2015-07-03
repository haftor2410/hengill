 module.exports = function ( grunt ) {
 grunt.loadNpmTasks('grunt-contrib-jshint');
 var taskConfig = {
   jshint: {
     src: ['src/**/*.js' , '!src/ignore.js'],
     gruntfile: ['Gruntfile.js'],
     options: {
	"curly": true,
	"eqnull": true,
	"eqeqeq": true,
	"undef": true,
	"globals":{
		"jQuery": true,
		"console": true,
		"module": true
	}	
     }
   }
 };
 grunt.initConfig(taskConfig);
 grunt.registerTask('default', ['jshint']);
};
