Springboard
=============

Springboard is an ultra minimal JavaScript / CSS and HTML project springboard.

It features a useful ANT build file which can:

* Refactor template files to match your project and namespace
* Build with Google Closure Builder allowing the use of [Google Closure Library](http://code.google.com/closure/library/)
* Compile JavaScript using the [Google Closure Compiler](http://code.google.com/closure/compiler/)
* Minify CSS using the [YUI Compressor](http://developer.yahoo.com/yui/compressor/)
* Generate JavaScript documentation using the [JSDoc Toolkit](http://code.google.com/p/jsdoc-toolkit/)

Also included is a simple **JavaScript Model-View-Controller (MVC) template** (based on [Alex Netkachov's](http://www.alexatnet.com/content/model-view-controller-mvc-javascript)) which can optionally be used as a basis for your project.

Quick Setup
-------------

To get started, first clone the repository:

	cd /your/workspace
	git clone git@github.com:LeanMeanFightingMachine/Springboard.git YourProjectName

Update the **AUTHOR** and **NAMESPACE** variables in the **build.properties** file.

Run the **setup** task:
	
	cd YourProjectName
	ant setup

This will refactor the project template to match your namespace. You'll then be given the option to *delete the GIT metadata* and disconnect from the Springboard repository...

###Now Start Coding!

In your HTML files keep your code in the following block comments:

* CSS:LIB - For CSS libraries
* CSS:SRC - For your CSS
* JS:LIB - For closure Javascript (You shouldn't need to change this)
* JS:SRC - For your Javascript

Scripts and styles embedded outside of blocks will remain untouched to add flexibility, whilst all blocks of the same type in different pages will intelligently be compiled together.

Springboard supports blocks for both third party libraries and project source files in CSS and JavaScript. Libraries used by your project are combined to reduce HTTP requests but not minfied, whereas project source files are.

Springboard uses [externs](http://code.google.com/closure/compiler/docs/api-tutorial3.html) to manage compiled code dependancies and ships with externs for [JQuery 1.6.1](http://jquery.com/). Externs for other libraries can be generated using [Closure Compiler Externs Extractor](http://www.dotnetwise.com/Code/Externs/index.html).

###Update Dependencies

As you add new classes you will need to update the dependencies so the Closure Library can dynamically locate the right Javascript files for the right classes.

To do this, run **update**:

	ant update

###Building

To compile your project, run **build**:

	ant build
	
###Deploying

To compile your project for deployment without any logs, run **deploy**:

	ant deploy

###Documenting

To generate JavaScript documentation, run **jsdoc**:

	ant jsdoc