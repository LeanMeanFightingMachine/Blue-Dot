goog.provide('Dispatcher');

/**
 * Dispatcher
 * @constructor
 */
Dispatcher = function( ) {
	this._events = {};
}

/**
 * Listen for events
 * @param {*} context The context of the calling method
 * @param {string} name The name of the event to listen for
 * @param {Function} func The function to call on event
 */
Dispatcher.prototype.listen = function( context, name, func ) {
	if(this._events[name])
	{
		this._events[name].push([context,func]);
	}
	else
	{
		this._events[name] = [[context,func]];
	}
}

/**
 * Remove listeners for events of a certain name
 * @param {string} name The name of the event remove listeners from
 */
Dispatcher.prototype.unlisten = function( name ) {
	if(this._events[name])
	{
		this._events[name] = [];
	}
}

/**
 * Dispatch events to listeners of a certain name
 * @param {string} name The name of the event to dispatch
 * @param {...} var_args
 */
Dispatcher.prototype.dispatch = function( name, var_args ) {
	if(this._events[name])
	{
		var args = [];
		var i;
		
		if(arguments.length > 1)
		{
			for(i = 1; i < arguments.length; i++)
			{
				args.push(arguments[i]);
			}
		}
		
		for(i = 0; i < this._events[name].length; i++)
		{
			this._events[name][i][1].apply(this._events[name][i][0], args);
		}
	}
}