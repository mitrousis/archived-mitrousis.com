define(["AnimationFrame", "Templates"], function(AnimationFrame, Templates){
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
					"videoURL" : modelItem.source_url
				};

				// Default template
				var template = "template-single-media-right";

				/*if(modelItem.tags.indexOf("single-media") > -1){
					template = (i % 2 == 0) ? "item-single-media-right" : "item-single-media-left";
				}*/

				var item = $(Mustache.render(Templates[template], itemProps));

				$(".item-container").append(item);

				// Initialize video js
				if(typeof modelItem.source_url !== 'undefined'){
					videojs("item_" + i + "_video", {
						width: 390,
						height: 219
						//techOrder: ["flash", "html5"]
					}, function(){});

				}
				
				modelItem["element"]  	= item;	
				modelItem["elementTop"] = 0;

				this._drawnItems++;
			}

		};

        this._onFrame = function(){

        	if(this._model == null) return;

            /*var scrollPos = ScrollCapture.getWindowScroll();
            var scrollPos = ScrollCapture.getWindowScroll();

        	this._lastScrollY += (-scrollPos.y - this._lastScrollY) * .5;
        	$(".item-container").css("top", this._lastScrollY);*/

           	// Reference to jquery dom element
           	var element = null;
           	var top 	= 0;
            
            for(var n in this._model){

            	element = this._model[n].element;
				top 	= element[0].getBoundingClientRect().top;

				// Update the ypos
				this._model[n].elementTop = top;

            	//var fgTop  = top * .4 + 20;
            	//var bgTop  = top * -.4;

				//var bgTop = offset;
				//element.find(".item-foreground").css("top", fgTop);//top);
				//element.find(".item-background").css("top", bgTop);//top);

			}

			this._navBar.updateOnScroll();
		};


		this._onFrame();
	};	

	return Renderer;

});


