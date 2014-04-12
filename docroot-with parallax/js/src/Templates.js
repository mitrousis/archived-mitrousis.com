define( function(){
	"use strict"

	return {

		"item-single-media" : '\
			<div class="item" id="{{itemId}}">\
		    	<div class="item-foreground">\
		        	<div class="info-block">{{&description}}</div>\
		        </div>\
		        <div class="item-midground">\
		        	{{^videoURL}}\
		          	<img class="media-single" src="{{imageURL}}">\
		          	{{/videoURL}}\
		          	{{#videoURL}}\
					<video id="{{itemId}}_video" class="media-single video-js vjs-default-skin" controls preload="none" poster="{{imageURL}}" data-setup="{"controls": false, "autoplay": false}">\
					<source src="{{videoURL}}" type="video/mp4" />\
					</video>\
					{{/videoURL}}\
		        </div>\
		        <!--div class="item-background">\
		           <img class="item-background-image" src="{{backgroundURL}}"></div>\
		        </div-->\
	     	</div>'

	};

/*width="500" height="281"*/
	



});