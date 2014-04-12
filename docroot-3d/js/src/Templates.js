define( function(){
	"use strict"


	var singleMedia = 	'<div class="media-small-border">\
			        	{{^videoURL}}\
			          	<img src="{{imageURL}}">\
			          	{{/videoURL}}\
			          	{{#videoURL}}\
							<video id="{{itemId}}_video" class="video-js vjs-default-skin video-container" controls preload="none" poster="{{imageURL}}">\
							<source src="{{videoURL}}" type="video/mp4" />\
							</video>\
						{{/videoURL}}\
						</div>';

	var infoBlock = '<div class="info-block">{{&description}}</div>';


	return {

		"item-single-media-right" : '\
			<div class="item media-single row" id="{{itemId}}">\
		        <div class="col-sm-7 col-sm-push-5 media-cell">' + singleMedia + '</div>\
		        <div class="col-sm-5 col-sm-pull-7">' + infoBlock + '</div>\
	     	</div>',

	    "item-single-media-left" : '\
			<div class="item media-single row" id="{{itemId}}">\
		        <div class="col-sm-7 media-cell">' + singleMedia + '</div>\
		        <div class="col-sm-5">' + infoBlock + '</div>\
	     	</div>'

	};

/*

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


*/
	



});