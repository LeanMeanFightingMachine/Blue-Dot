goog.provide('namespace.project.View');

goog.require('namespace.project.Model');
goog.require('namespace.project.Controller');

goog.require('Logger');

/**
 * View component of the Model View Controller implementation
 * @param {*} model The model for this view
 * @param {*} controller The controller for this view
 * @param {Object} dom References to DOM objects used in this view
 * @constructor
 */
namespace.project.View = function( model, controller, dom ) {
	
	this._controller = controller;
	this._model = model;
	this._dom = dom;
	
	var self = this;

	this.endX = 0, this.endY = 0;

	this.dot = document.getElementById('dot');
	
	this._controller.listen(this, namespace.project.Notification.START, this.start);
}


/**
 * Start the view
 */
namespace.project.View.prototype.start = function( ) {
	Logger.debug("start");

	var self = this;
	

	//this.dot.addEventListener("click", function(event){ event.preventDefault(); self._dotClickedHandler(event, this);});
	window.addEventListener("click", function(event){event.preventDefault(); self._dotClickedHandler(event, this);}, false);

	this._showPosition();

	this.initX = 0;
	this.initY = 0;



	var loop = setInterval(function(){	

		self._setDotPosition();

	}, 30);
	


	
}

namespace.project.View.prototype._dotClickedHandler = function(){
	var self = this;

	var classShapes = new Array("square", "circle", "triangle", "cube", "pacman", "yin-yang" , "infinity");
	var randomClassShape = classShapes[Math.floor(Math.random()*classShapes.length)];
	

	document.getElementById('dot').className =  "";
	if(randomClassShape != "cube"){
		self.dot.className = randomClassShape;
		
		this._setDotPosition();

		$('.topFace').css("display", "none");
		$('.leftFace').css("display", "none");
		$('.rightFace').css("display", "none");
	} else{
		document.getElementById('dot').className = "";
		// document.getElementsByClassName('topFace').style.display = "block";
		// document.getElementsByClassName('leftFace').style.display = "block";
		// document.getElementsByClassName('rightFace').style.display = "block";
		$('.topFace').css("display", "block");
		$('.leftFace').css("display", "block");
		$('.rightFace').css("display", "block");
	}
	


}

namespace.project.View.prototype._fixPageXY = function(event){
	
	var self = this;

	

	if (event.pageX != null && event.clientX != null ) 
	{ 
	    var html = document.documentElement;
	    var body = document.body;

	    event.pageX = event.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
	    event.pageX -= html.clientLeft || 0;
	    
	    event.pageY = event.clientY + (html.scrollTop || body && body.scrollTop || 0);
	    event.pageY -= html.clientTop || 0;

		document.getElementById('xPosition').innerHTML = event.pageX;
		document.getElementById('yPosition').innerHTML = event.pageY;

	}

	this.endY = event.pageY ;
	this.endX = event.pageX ;
	
	
}

namespace.project.View.prototype._showPosition = function(){

	var self = this;

	document.onmousemove = function(event) 
	{
		event = event || window.event
		self._fixPageXY(event);

	}
}

namespace.project.View.prototype._setDotPosition = function(){

	var self = this;

	self.initX += ((self.endX - (self.dot.offsetWidth/2)) - self.initX)/12;
	self.initY += ((self.endY - (self.dot.offsetHeight/2)) - self.initY)/12;

	self.dot.style.left = Math.round(this.initX).toString() + "px";
	self.dot.style.top = Math.round(this.initY).toString() + "px";	
}


