define(function(){
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
			this._posts 	= this._posts.concat(result.response.posts);

			// Sorting posts by date here, but needs the whole data set if >20 posts
			function compare(a,b) {
				if (new Date(a.date) < new Date(b.date))
					return 1;
				if (new Date(a.date) > new Date(b.date))
				 	return -1;
				return 0;
			}

			this._posts.sort(compare);

			this._dataCallback(this._posts);
		};

	}


	return TumblrModel;
});