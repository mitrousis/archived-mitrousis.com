define(["lib/EventEmitter.min"], function(EventEmitter){
	
	var AnimationFrame = function(){

		this.FRAMETICK = 'frameTick';

		var $self 	= this;

		this._requestAnimFrame = 
			window.requestAnimationFrame       ||
	      	window.webkitRequestAnimationFrame ||
	      	window.mozRequestAnimationFrame    ||
	      	function( callback ){
	        	setTimeout(callback, 16);
	      	};

		this._tick = function (){
			$self._requestAnimFrame($self._tick);
			$self.trigger($self.FRAMETICK);
		};

		$self._tick();
	};

	$.extend(true, AnimationFrame.prototype, EventEmitter.prototype);

	return new AnimationFrame();

});