/*
 * Task: adb
 * Description: Bump the BuildVersion in plist file
 * Dependencies: child_process
 */

module.exports = function(grunt) {
	var terminal = require("child_process").exec;

	var run = function(command, callback) {
		terminal(command, function(error, stdout, stderr) {
			var message = (command + error ? ' KO' : ' OK')[error ? 'red' : 'green'];
			grunt.log.writeln(message);
		});
	}

	grunt.registerMultiTask('adb', 'Launch ADB commands from Grunt', function() {
		var done = this.async();

		// handle device option, or select the only USB conected device
		if (typeof this.data.device === 'undefined') {
			this.data.device = ' -d ';
		} else {
			this.data.device = ' -s ' + this.data.device;
		}

		// handle debug option, or set by default
		if (typeof this.data.wait === 'undefined' || this.data.wait) {
			this.data.wait = ' -W ';
		} else {
			this.data.wait = ' ';
		}

		// handle action option
		if (!this.data.action) {
			this.data.action = ' -a android.intent.action.MAIN ';
		} else {
			this.data.action = ' -a ' + this.data.action;
		}


		// INSTALL
		if (this.data.install) {
			run('adb ' + device + ' -r ' + this.data.install, function(){
				done();
			});
		}

		// AM START aka LAUNCH
		if (this.data.launch) {
			if (!this.data.component) {
				grunt.log.writeln('ADB: '.red + 'launch'.cyan + ' needs a '.red + 'component'.cyan + ' attribute.'.red);
			} else {
				this.data.component = ' -n ' + this.data.component;
			}

			run('adb ' + device + ' shell am start ' + this.data.action + this.data.component, function(){
				done();
			});
		}
	});
};
