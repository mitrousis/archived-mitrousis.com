define(["lib/jquery-2.1.0.min"], function(jquery){
	
	var $self 	= this;
	var body 	= $(document.body);

	this._requestAnimFrame = 
		window.requestAnimationFrame       ||
      	window.webkitRequestAnimationFrame ||
      	window.mozRequestAnimationFrame    ||
      	function( callback ){
        	setTimeout(callback, 16);
      	};

	this._tick = function (){
		$self._requestAnimFrame($self._tick);
		body.trigger("frameTick");
	}

	this._tick();
			
	return body;

});