define(["ScrollCapture", "AnimationFrame", "Templates"], function(ScrollCapture, AnimationFrame, Templates){
	"use strict";

	function Renderer(navBar){
		var $self 			= this;

		this._model 		= null;
		this._navBar		= navBar;
		this._lastScrollY 	= 0;
		this._drawnItems    = 0;

		//videojs("example_video_1", { "loop": "true" }, function(){
  			//this.play();
		//});


		AnimationFrame.on("frameTick", function(){
			$self._onFrame();
		});

		this.setModel = function(model){
			this._model = model;

			// Build
			for(var i = this._drawnItems; i<this._model.length; i++){
				var modelItem = this._model[i];

				var itemProps = {
					"itemId" : "item_" + i,
					"description" : modelItem.caption,
					"imageURL" : modelItem.photos[0].alt_sizes[1].url,
					"backgroundURL" : "./images/texture-brown-paper.jpg",
					"videoURL" : modelItem.source_url
				};

				var item = $(Mustache.render(Templates['item-single-media'], itemProps));

				$(".item-container").append(item);

				modelItem["element"]  	= item;	
				modelItem["elementTop"] = 0;

				this._drawnItems++;
			}

		};

        this._onFrame = function(){

        	if(this._model == null) return;

            var scrollPos = ScrollCapture.getWindowScroll();

        	this._lastScrollY += (-scrollPos.y - this._lastScrollY) * .5;
        	$(".item-container").css("top", this._lastScrollY);

           	// Reference to jquery dom element
           	var element = null;
           	var top 	= 0;
            
            for(var n in this._model){

            	element = this._model[n].element;
				top 	= element[0].getBoundingClientRect().top;

				// Update the ypos
				this._model[n].elementTop = top;

            	var fgTop  = top * .4 + 20;
            	var bgTop  = top * -.4;

				//var bgTop = offset;
				element.find(".item-foreground").css("top", fgTop);//top);
				//element.find(".item-background").css("top", bgTop);//top);

			}

			this._navBar.updateOnScroll();
		};


		this._onFrame();
	};	

	return Renderer;

});


