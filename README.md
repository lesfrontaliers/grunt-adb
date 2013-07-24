grunt-adb
=========

> Launch ADB commands from Grunt

## Getting Started
This plugin requires [Grunt](http://gruntjs.com/) `~0.4.0` and the `adb` command.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-adb --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-adb');
```

## adb task
_Run this task with the `grunt adb` command._

This plugin uses `registerMultiTask` so you can define multiple commands to execute.

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Available commands & options

The options `wait`, `debug`, and `device` are defined for all commands.

#### install
The path to the `.apk` file to install 

#### launch
The component to lauch.

You can optionnaly specify a particular `action` (Intent) to use.


### Usage Example

```js
grunt.initConfig({
	adb: {
	  step_one: {
	    install: 'MyProject.apk'
	  },
	  step_two: {
	    launch: 'org.mycompany.MyProject/.Main'
	  },
	},
})
```
