requirejs.config({
    baseUrl: 'js/src',
    paths: {
    	jquery: 'jquery-1.7.1',
        lib: '../lib'
    }
});

// Start the main app logic.
requirejs(['lib/jquery-2.1.0.min', 'Renderer', 'NavBar', 'TumblrModel'], function   (jquery, Renderer, NavBar, TumblrModel) {
	
  
      //http://api.tumblr.com/v2/blog/nicholasmitrousis.tumblr.com/posts/?api_key=8fDUIQ9id8RCOfmqxWuFtV96KAsHFIDVfKr4IetUygbChizahM

      var $self = this;
      
    	videojs.options.flash.swf = "js/lib/video-js/video-js.swf";

      var model = new TumblrModel();

      var navbar   = new NavBar();
      var renderer = new Renderer(navbar);

      model.onData(function(allPosts){
        navbar.setModel(allPosts);
        renderer.setModel(allPosts);
        $self._onResize();
      });

      model.loadNextPage();

    
    	

    	$(window).on("resize", function(){
    		$self._onResize();
    	});

    	this._onResize = function(){
    		// Make sure all our videos are 16X9
        $(".video-16x9").each(function(index, item){
          $(item).height($(item).width() * (9/16));
        });
    		
    	};


});