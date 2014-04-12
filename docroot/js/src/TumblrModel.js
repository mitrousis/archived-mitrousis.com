define(["Application"], function(Application){
	"use strict";

	function TumblrModel() {

		var $self = this;

		this._posts     	= [];
		this._lastPage 		= 0;
		this._baseUrl 		= "http://api.tumblr.com/v2/blog/nicholasmitrousis.tumblr.com/posts/?api_key=8fDUIQ9id8RCOfmqxWuFtV96KAsHFIDVfKr4IetUygbChizahM";
		this._dataCallback 	= null;

		// Public
		this.loadNextPage = function(){
			this._getPage(this._lastPage++);
		};

		this.getPosts = function(){
			return this._posts;
		};

		this.onData = function(callback){
			this._dataCallback = callback;
		};

		this._getPage = function(pageNum){

			var url = this._baseUrl + "&offset=" + (20 * pageNum);

			$.ajax({
				"dataType" : "jsonp",
				"url" : url
			}).done(function(result) {
  				$self._onLoadComplete(result)
			});

		};

		this._onLoadComplete = function(result){
			var posts 	= result.response.posts;
			this._filterPosts(posts);

			this._posts 	= this._posts.concat(posts);

			this._dataCallback(this._posts);
		};

		this._filterPosts = function(posts){
			for(var n in posts){
				if(!Application.isStage){
					// Tagged with "stage"? then remove if not stage
					if(posts[n].tags.indexOf("stage") !== -1){
						posts.splice(n, 1);
					}
				}
				
			}

			// Sorting posts by date here, but needs the whole data set if >20 posts
			function compare(a,b) {
				return b.timestamp - a.timestamp;
			}

			posts.sort(compare);

		};

	}


	return TumblrModel;
});