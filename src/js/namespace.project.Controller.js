goog.provide('namespace.project.Controller');

goog.require('namespace.project.Model');
goog.require('namespace.project.Command');
goog.require('namespace.project.Notification');

goog.require('Logger');
goog.require('Dispatcher');

/**
 * Controller component of the Model View Controller implementation
 * @param {*} model The data Model for this Controller
 * @extends Dispatcher
 * @constructor
 */
namespace.project.Controller = function( model ) {
	Dispatcher.call(this);
	
	this._model = model;
}

goog.inherits(namespace.project.Controller, Dispatcher);

/**
 * Notify sent from view
 * @param {string} type The type of notification
 * @param {Object=} data The data sent with notification
 */
namespace.project.Controller.prototype.command = function(type,data) {
	switch(type)
	{
		case(namespace.project.Command.START):
			this.start();
		break;
	}
}

/**
 * Start the application
 */
namespace.project.Controller.prototype.start = function() {
	this.dispatch(namespace.project.Notification.START);
}