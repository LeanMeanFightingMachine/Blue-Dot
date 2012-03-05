goog.provide('namespace.project.App');

goog.require('namespace.project.Model');
goog.require('namespace.project.Controller');
goog.require('namespace.project.View');
goog.require('namespace.project.Command');

goog.require('Logger');

namespace.project.App = function( ) {
	
	$(document).ready(function(){
		
		var	controller,
			model,
			view,
			dom = {};
			
		model		= new namespace.project.Model();
		controller	= new namespace.project.Controller( model );
		view		= new namespace.project.View( model, controller, dom );
		
		controller.command(namespace.project.Command.START);
	});
}

goog.exportSymbol('namespace.project.App', namespace.project.App);